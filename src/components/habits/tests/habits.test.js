import {render, screen} from '@testing-library/react'
import Habits from '../habits';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

describe('Habits', () => {

  const habits = [
    {id: 1, name: 'Reading', count:0},
    {id: 2, name: 'Running', count:1},
    {id: 3, name: 'Coding', count:0}
  ]; 

  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;
  
  let habitsComponent;
  beforeEach( () => {
    
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();

    habitsComponent = (
      <Habits
         habits={habits}
         onIncrement={onIncrement}
         onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );

    
  });

  it('render', () => {
    const component = renderer.create(habitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('button click', () => {
    beforeEach(() => {
      render(habitsComponent);
    });

    it('calls onAdd when clicking the "Add" button', () => {
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");
      const newHabit = 'New Habit';
      userEvent.type(input, newHabit);
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('New Habit');
    });

    it('calls onIncrement when clicking the "increse" button', () => {
      
      const button = screen.getAllByTitle("increseBtn")[0];
      userEvent.click(button);

      expect(onIncrement).toHaveBeenCalledWith(habits[0]);
    });

    it('calls onDecrement when clicking the "decrese" button', () => {
      
      const button = screen.getAllByTitle("decreseBtn")[1];
      userEvent.click(button);

      expect(onDecrement).toHaveBeenCalledWith(habits[1]);
    });

    it('calls onDelete when clicking the "delete" button', () => {
      
      const button = screen.getAllByTitle("deleteBtn")[0];
      userEvent.click(button);

      expect(onDelete).toHaveBeenCalledWith(habits[0]);
    });

    it('calls onReset when clicking the "Reset All" button', () => {
      const button = screen.getByText('Reset All');
      userEvent.click(button);
  
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });
  
});
