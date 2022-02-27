import '@testing-library/jest-dom'
import Habits from '../habits';
import renderer from 'react-test-renderer';

describe('Habits', () => {

  const habits = [
    {id: 1, name: 'Reading', count:0},
    {id: 2, name: 'Running', count:1},
    {id: 3, name: 'Coding', count:0}
  ]; 

  it('renders', () => {
    //스냅샷 테스트
    const component = renderer.create(
      <Habits
         habits={habits}
         onIncrement={jest.fn()}
         onDecrement={jest.fn()}
        onDelete={jest.fn()}
        onAdd={jest.fn()}
        onReset={jest.fn()}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
