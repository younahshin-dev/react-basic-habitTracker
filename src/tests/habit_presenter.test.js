import HabitPresenter from '../habit_presenter.js';

describe('habit tracker', () => {
  let habitPresenter;
  const habits = [
    {id: 1, name: 'Reading', count:0},
    {id: 2, name: 'Running', count:1},
    {id: 3, name: 'Coding', count:0}
  ]; 

  let update;
  
  beforeEach(() => {
    habitPresenter = new HabitPresenter(habits, 4);
    update = jest.fn(() => {}) //함수 목킹
  });

  it('habit should be initiated', () => {
    expect(habitPresenter.getHabits()).toEqual(habits);
  });

  it('increment gain 1 to count of habit,  call update callback', () => {
    habitPresenter.increment(habits[0], update);
    expect(habitPresenter.getHabits()[0].count).toBe(1);
    chekcUpdateCalled();
    
  });

  it('decrement minus 1 to count of habit,  call update callback', () => {
    habitPresenter.decrement(habits[1], update);
    expect(habitPresenter.getHabits()[1].count).toBe(0);
    chekcUpdateCalled();
  });

  it('does not set the value below zero when decrements', () => {
    habitPresenter.decrement(habits[0], update);
    habitPresenter.decrement(habits[0], update);
    expect(habitPresenter.getHabits()[0].count).toBe(0);
  });

  it('delete is remove habit', () => {
    habitPresenter.delete(habits[1], update);
    expect(habitPresenter.getHabits().length).toBe(2);
    expect(habitPresenter.getHabits()[1].name).toBe('Coding');
    chekcUpdateCalled();
  });

  it('add habit', () => {
    habitPresenter.add('Game', update);
    expect(habitPresenter.getHabits().length).toBe(4);
    expect(habitPresenter.getHabits()[3].name).toBe('Game');
    expect(habitPresenter.getHabits()[3].count).toBe(0);
    chekcUpdateCalled();
  });

  it('throws an error when the max habits limit is exceeded', () => {
    habitPresenter.add('Game', update);
    expect(() => {
      habitPresenter.add('Eating', update);

    }).toThrowError(`The max count of habit that you can add is 4`);
  });

  describe('reset', () => {
    it('reset habit -> make every count 0', () => {
      habitPresenter.reset(update);
      expect(habitPresenter.getHabits()[0].count).toBe(0);
      expect(habitPresenter.getHabits()[1].count).toBe(0);
      expect(habitPresenter.getHabits()[2].count).toBe(0);
      chekcUpdateCalled();
    });

    it('does not create new object when count is 0', () => {
      const habits = habitPresenter.getHabits();
      habitPresenter.reset(update);
      const updatedHabits = habitPresenter.getHabits();
      expect(updatedHabits[0]).toBe(habits[0]); // toEqual 은 안의 내용을 비교하기때문에 레퍼런스 체크가 안됨 toBe 는 참조값을 체크
    }); 
  });
  

  function chekcUpdateCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(habitPresenter.getHabits());
  }
});