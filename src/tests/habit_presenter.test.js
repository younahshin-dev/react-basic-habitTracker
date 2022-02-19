const HabitPresenter = require('../habit_presenter.js');

describe('habit tracker', () => {
  let habitPresenter;
  const habits = [
    {id: 1, name: 'Reading', count:0},
    {id: 1, name: 'Running', count:0},
    {id: 1, name: 'Coding', count:0}
  ]; 
  beforeEach(() => {
    habitPresenter = new HabitPresenter(habits);
  });
  it('plus is gain 1', () => {
    expect(
      habitPresenter.getHabit()
      ).toBe([
        {id: 1, name: 'Reading', count:0},
        {id: 1, name: 'Running', count:0},
        {id: 1, name: 'Coding', count:0}
      ]);
  });
});