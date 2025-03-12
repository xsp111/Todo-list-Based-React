import React, { useState } from "react";
import Button from "../../components/Button";

function TodosList(){
    const [input, setInput] = useState('');
    const [windowPop, setWindowPop] = useState({
        isPop: false,
        type: null,
        editIndex: 0
    });
    const [todos, setTodos] = useState([
        {
            id: 1,
            what: 'Learn React',
            when: '12:00am',
            done: false
        }
    ]);

    function handleAdd(){
        setWindowPop({
            isPop: true,
            type: 'add',
        });
        return;
    }

    function handleEdit(todoId){
        setWindowPop({
            isPop: true,
            type: 'edit',
            editIndex: todoId
        });
        return;
    }

    function handleInputChange(e){
        setInput(e.target.value);
    }

    function handleOk(type){
        if(type === 'add'){
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    what: input,
                    when: '12:00am',
                    done: false
                }
            ]);
        }else{
            setTodos(todos.map(todo => {
                if(todo.id === windowPop.editIndex){
                    return ({
                        ...todos,
                        what: input
                    });
                }else{  
                    return todo;
                }
            }));
        }
        setInput('');
        handleCancle();
    }

    function handleCancle(){
        setWindowPop({
            ...windowPop,
            isPop: false
        });
    }

    function handleDelete(todoId){
        setTodos(todos.filter( todo => todo.id !== todoId));
    }

    return (
        <>

            {/* 弹窗 */}

            {windowPop.isPop && (
                <div id="mask">
                    <section id={windowPop.type}>
                    <h3>
                        {windowPop.type === 'add' ? 'WHAT DO U WANT TO DO?' : 'CHANG UR PLAN？'}
                    </h3>
                    <div class="bd" >
                        <span>
                            {windowPop.type === 'add' ? 'Write Down' : 'Just Write It '}
                            <i class="fas fa-feather"></i>
                        </span>
                        <input id="input" type="text" 
                            placeholder={windowPop.type === 'add' ? "text new Todo" : 'change your todo'}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button id="ok" onClick={e => { handleOk(windowPop.type); }}>
                        <i class="fas fa-check"></i>
                    </button>
                    <button id="cancle" onClick={handleCancle}><i class="fas fa-xmark"></i></button>
                    </section>
                </div>
            )}

            {/* 主体部分 */}

            <header id='header'>
                <h3>Todo</h3>
                <Button 
                    type={'add'}
                    onClick={ () => {
                        handleAdd('add');
                    }}
                />
            </header>
            <ul>
                {todos.map( (todo) => {
                    return (
                        <li id={todo.id}>
                            <span className="text"><i className="fas fa-circle-exclamation"></i>{todo.what}, at {todo.when}</span>
                            <Button type={'edit'} onClick={e => { handleEdit(todo.id) }}/>
                            <Button 
                                type={'delete'} 
                                onClick={ e => {
                                handleDelete(todo.id);
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default TodosList;