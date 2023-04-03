import axios from "axios";

export const getStaticPaths = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     const paths = data.map((ninja: any) => {
//         return {
//             params: { id: ninja.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false,
//     }
// }

    try {
       const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
       //const data = res.data;
        
       const paths = data.map((ninja: any) => {
        return {
            params: {id: ninja.id.toString()}
        }
       })

       return {
        paths,
        fallback: false
       }

       } catch (error) {
        console.log(error)
        return {
            paths: [],
            fallback: false,
           }

    }

}
    



export const getStaticProps = async(context: any) => {
    try {
        const id = context.params.id;
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
        //const data = await res.data;
        

    return {
        props: {ninjas: data}
    }

   
}  catch (error) {
    console.log(error)
    return {
        props: []
    }
}

}

const Details = ({ninjas}: any) => {
    console.log(ninjas);
    return (
        <div>
            <h1>{ ninjas.name }</h1>
            <p>{ ninjas.email }</p>
            <p>{ ninjas.address.street }</p>
        </div>
        
     );
}
 
export default Details;