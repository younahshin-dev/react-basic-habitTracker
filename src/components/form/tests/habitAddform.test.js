import react from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import HabitAddForm from '../habitAddForm';
import renderer from 'react-test-renderer';

describe('HabitAddForm', () => {
  it('renders', () => {
    //스냅샷 테스트
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()}/>);

    expect(component.toJSON()).toMatchSnapshot();
  })

  describe('Form Submit', () => {
    let onAdd;
    let input;
    let button;
  
    beforeEach(()=> {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('Habit');
      button = screen.getByText('Add');
    })
  
    it('calls onAdd when button is clicked and valid habit is entered', () => {
      //input 에다가 원하는 습관의 이름을 타이핑 한다음 
      //add라는 버튼을 클릭하면
      //onAdd가 input에 입력한 이름으로 호출되어야 함
      userEvent.type(input, 'New Habit');
      userEvent.click(button);
  
      expect(onAdd).toHaveBeenCalledWith('New Habit');
    });
  
    it('does not call onAdd when button is clicked and valid habit is empty', () => {
      //input 에다가 원하는 습관의 이름을 타이핑 한다음 
      //add라는 버튼을 클릭하면
      //onAdd가 input에 입력한 이름으로 호출되어야 함
      userEvent.type(input, '');
      userEvent.click(button);
  
      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  
  });
  
});

