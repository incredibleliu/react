import React, { Component } from 'react';
import ContactCard from "./ContactCard";
import ContactData from "./ContactData";

// export default class App extends Component {

//     render(){
//         return (
//             // <div>
//             //     Hello From React v15.4.2 !!!
//             // </div>
//             <div>
//                 <ContactCard contact={{id: "1", name: "aaa"}} />
//                 <ContactCard contact={{id: "2", name: "bbb"}} />
//                 <ContactCard contact={{id: "3", name: "ccc"}} />
//             </div>
//         );
//     }
// }


function App(){
    const nums = [1, 2, 3];
    const doubled = nums.map(function(num) {
        return num * 2;
    })
    console.log(nums)
    console.log(doubled)

    const contacts = ContactData.map(contact => <ContactCard key={contact.id} id={contact.id} name={contact.name} />)

    return (
        // <div>
        //     Hello From React v15.4.2 !!!
        // </div>
        <div>
            {contacts}
        </div>
    );


}

export default App