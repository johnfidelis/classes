import React from 'react';
import "./App.css"

const CreateProps = (props) => {

    let items = props.items

    return (
        <>

            <div style={{ display: 'flex', width: '100%', gap: '20px', flexWrap: 'wrap', margin: '2rem 0px', }}>
                {items.map((item) => (

                    <div style={{ backgroundColor: "gray", width: '25rem', border: 'solid gray', margin: 'auto' }} >

                        <img style={{ width: '25rem', height: '30rem', borderBottom: "solid blue"  }} src={item.image} alt="" />

                        <div style={{ textAlign: 'center' }}>
                            <h1 >{item.heading}</h1>
                        </div>
                        <p style={{ fontSize: '20px', padding: '0px 10px', }}> {item.text} </p>
                        <div style={{ textAlign: 'center', marginTop: '5px' }}>

                            <button >Read article</button>
                        </div>
                    </div>
                ))

                }
            </div>

        </>
    )
};



export default CreateProps;
