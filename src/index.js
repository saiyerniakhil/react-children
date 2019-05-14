import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function App() {
    return(
        <div>
            <FirstChildOnly>
                <h1> Hi </h1>
                <h1>Hello</h1>
            </FirstChildOnly>
            <LastChildOnly>
                <h1>Good Morning</h1>
                <h1>Good Evening</h1>
                <h2>Good Night</h2>
            </LastChildOnly>
            <Head number={3}>
                <h1>Bla</h1>
                <h2>Foo Bar</h2>
                <h3> Lorem ipsum dolor sit amet. </h3>
                <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minima optio quos hic labore? Quidem! </h4>
            </Head>
            <hr/>
            <Tail number={2}>
                <h1> Lorem. </h1>
                <h2> Lorem ipsum dolor sit amet. </h2>
                <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum?   </h3>
                <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos temporibus unde porro dicta iure atque laudantium tenetur id delectus. </h4>
            </Tail>
            <Dialog classname="dialog-box">
                <Title title={'This is important'} />
                <hr/>
                <Body bodyText={'Here is some important message. Well its nothing!'}/>
                <hr/>
                <Footer/>
            </Dialog>
        </div>
        
    )
}

let Footer = () => {
    return(
        <div>    
        <button type="button" className="btn btn-default">Close</button>
        </div>
    )
}

let Body = ({bodyText}) => {
    return(
        <div>        
        {bodyText}
        </div>
    )
}

let Title = ({title}) => {
    return(
        <div>
        <h4>{title}</h4>
        </div>
    )
}

let Dialog = ({children,classname}) => {
    return(
        <div> 
            <div className={classname}>   
            {children}
            </div>
        </div>
    )
}

Dialog.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.instanceOf(Title),
        PropTypes.instanceOf(Footer),
        PropTypes.instanceOf(Body)
    ])
}

let Tail = ({children, number}) => {
    let items = React.Children.toArray(children)
    let itemsReq = items.slice(-(number)) 
    return(
        <div>
            {itemsReq}
        </div>    
    )
}

let Head = ({children,number}) => {
    let items = React.Children.toArray(children);
    let itemsReq = []
    for(let i = 0; i < number; i++) {
        itemsReq[i] = items[i]
    }
    return(
        <div>
        <hr/>
        {itemsReq}
        </div> 
    )
}

let FirstChildOnly = ({ children }) => {
    let items = React.Children.toArray(children)
    let itemReq = items[0]
    return(
        <div>
            {itemReq}
        </div>    
    )
}

let LastChildOnly = ({children}) => {
    let items = React.Children.toArray(children);
    let item = items[items.length-1]
    return(
        <div>{item}</div>
    )

}

ReactDOM.render(<App/>,document.getElementById('root'))
