import React from 'react';
import '../../assets/Home.css';
import TodosList from './TodosList';

function Home(){
    return(
        <div id='background'>
            <div id='body'>
                <TodosList />
            </div>
        </div>
    );
}

export default Home;