import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../app';
import HabitPresenter from '../habit_presenter.js';
import renderer from 'react-test-renderer';


describe('App', () => {

  const habitPresenter = new HabitPresenter(
    [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  );
  
  let app;

  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();

    app = (
      <App presenter={habitPresenter}/>
    )
  });

  it('renders', () => {
    const component = renderer.create(app);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('button click', () => {
    beforeEach(() => {
      render(app);
    });

    it('total count is plus when another habit is increased', () => {
      
      const button = screen.getAllByTitle("increseBtn")[0];
      userEvent.click(button);
      
      const count = screen.getByTestId("total-count");
      expect(count.innerHTML).toBe('1');
    });

    it('calls onAdd when clicking the "Add" button', () => {
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");
      const newHabit = 'New Habit';
      userEvent.type(input, newHabit);
      userEvent.click(button);

      const addedName = screen.getAllByTestId('habit-name')[3];
      expect(addedName.innerHTML).toBe('New Habit');
    });

    it('deletes an item', () => {
      const first = screen.getAllByTitle('deleteBtn')[0];
      userEvent.click(first);
      const next = screen.getAllByTestId('habit-name')[0];
      expect(next.innerHTML).not.toBe('Reading');
    });

    it('calls onIncrement when clicking the "increse" button', () => {
      
      const button = screen.getAllByTitle("increseBtn")[0];
      userEvent.click(button);

      const count = screen.getAllByTestId('habit-count')[0];
      expect(count.innerHTML).toBe('1');
    });

    it('calls onDecrement when clicking the "decrese" button', () => {
      
      const button = screen.getAllByTitle("decreseBtn")[1];
      userEvent.click(button);

      const count = screen.getAllByTestId('habit-count')[1];
      expect(count.innerHTML).toBe('0');
    });

    it('calls onReset when clicking the "Reset All" button', () => {
      const button = screen.getByText('Reset All');
      userEvent.click(button);
      screen.getAllByTestId('habit-count').forEach((count) => {
        expect(count.innerHTML).toBe('0');
      });
    });
  });
});