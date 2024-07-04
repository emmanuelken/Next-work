//Css in js

// const ExamplePage = () => {

//     const abc = {
//         display: 'flex',
//         padding: '20px',
//         backgroundColor: 'aqua'     
//     }

//     return (
//         <div style={abc}>
//             <h1 className="one">Hello From Example</h1>
//             <h1>Hello From Example</h1>
//             <h1>Hello From Example</h1>
//         </div>
//     )
// }

// export default ExamplePage;



//Css Module
import styles from './example.module.css'

const ExamplePage = () => {

    return (
        <div className={styles.myHeader}>
            <h1>Hello From Example</h1>
        </div>
    )
}

export default ExamplePage;