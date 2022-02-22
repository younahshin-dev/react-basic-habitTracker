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
    habitPresenter = new HabitPresenter(habits);
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

  it('reset habit -> make every count 0', () => {
    habitPresenter.reset(update);
    expect(habitPresenter.getHabits()[0].count).toBe(0);
    expect(habitPresenter.getHabits()[1].count).toBe(0);
    expect(habitPresenter.getHabits()[2].count).toBe(0);
    chekcUpdateCalled();
  });

  function chekcUpdateCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(habitPresenter.getHabits());
  }
});