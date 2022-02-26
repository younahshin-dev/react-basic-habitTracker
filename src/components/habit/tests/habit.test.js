import react from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import Habit from '../habit';
import renderer from 'react-test-renderer';

describe('Habit', () => {

  const habit = {id: 1, name: 'Reading', count:0};

  it('renders', () => {
    //스냅샷 테스트
    const component = renderer.create(
        <Habit habit={habit} onIncrement={jest.fn()}
             onDecrement={jest.fn()}
             onDelete={jest.fn()}/>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Form Submit', () => {
    let onIncrement;
    let onDecrement;
    let onDelete;
    
    let button;
  
    beforeEach(()=> {
      onIncrement = jest.fn();
      onDecrement = jest.fn();
      onDelete = jest.fn();

      render(<Habit
        //key={habit.id}
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />);

      button = screen.getByTestId('increseBtn');
    })
  
    it('calls onIncrement when first button is clicked', () => {
      //input 에다가 원하는 습관의 이름을 타이핑 한다음 
      //add라는 버튼을 클릭하면
      //onAdd가 input에 입력한 이름으로 호출되어야 함
      userEvent.click(button);
  
      expect(onIncrement).toHaveBeenCalledTimes(1);
    });
  });
    
});
