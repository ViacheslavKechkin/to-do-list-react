import Todo from '../Todo/Todo';
import _ from 'lodash'
import './Todolist.scss';

const Todolist = ({ tasks, removeTask, changeCheckbox }) => {

  return (
    <div className='list-wrapper'>
      {_.sortBy(tasks, 'isCheck').map((item, index) => {

        return (
          <Todo
            changeCheckbox={changeCheckbox}
            removeTask={removeTask}
            item={item}
            key={`index-${index}`}
          />
        )
      })}
    </div>
  )
}

export default Todolist;