
import '@testing-library/jest-dom'
import Navbar from '../navbar';
import renderer from 'react-test-renderer';

describe('Habit', () => {

  
  const habits = [
    {id: 1, name: 'Reading', count:0},
    {id: 2, name: 'Running', count:1},
    {id: 3, name: 'Coding', count:0}
  ]; 


  it('renders', () => {
    //스냅샷 테스트
    const component = renderer.create(
      <Navbar
      totalCount={habits.filter(item => item.count > 0).length}/>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  
    
});
