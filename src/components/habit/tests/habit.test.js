
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import Habit from '../habit';
import renderer from 'react-test-renderer';

describe('Habit', () => {

  const habit = {id: 1, name: 'Reading', count:0};
  
  let onIncrement;
  let onDecrement;
  let onDelete;

  let habitComponent;

  beforeEach(()=> {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();

    habitComponent = (<Habit
      //key={habit.id}
      habit={habit}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onDelete={onDelete}
    />);

  })

  it('renders', () => {
    //스냅샷 테스트
    const component = renderer.create(habitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Form Submit', () => {
  
    describe('button click', () => {

      beforeEach(() => {
        render(habitComponent);
      });

      it('calls onIncrement when first button is clicked', () => {
        //input 에다가 원하는 습관의 이름을 타이핑 한다음 
        //add라는 버튼을 클릭하면
        //onAdd가 input에 입력한 이름으로 호출되어야 함
        const plusButton = screen.getByTitle('increseBtn');
        userEvent.click(plusButton);
    
        expect(onIncrement).toHaveBeenCalledTimes(1);
      });
  
      it('calls onDecrement when first button is clicked', () => {
        //input 에다가 원하는 습관의 이름을 타이핑 한다음 
        //add라는 버튼을 클릭하면
        //onAdd가 input에 입력한 이름으로 호출되어야 함
        const minusButton = screen.getByTitle('decreseBtn');
        userEvent.click(minusButton);
    
        expect(onDecrement).toHaveBeenCalledTimes(1);
      });
  
      it('calls onDelete when first button is clicked', () => {
        //input 에다가 원하는 습관의 이름을 타이핑 한다음 
        //add라는 버튼을 클릭하면
        //onAdd가 input에 입력한 이름으로 호출되어야 함
        const deleteButton = screen.getByTitle('deleteBtn');
        userEvent.click(deleteButton);
    
        expect(onDelete).toHaveBeenCalledTimes(1);
      });
    });
  });
});
