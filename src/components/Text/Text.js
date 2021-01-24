// on importe le hook souhaité 
// on utilise la déstructuration { le hook }
import { useState } from 'react';

const Text = (props) => {
    //Afficher un string aléatoire
    // const [texte, setText] = useState(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    // state de base = bonjour
    const [texte, setText] = useState("Bonjour");

    const handleChangeText = (event) => {
        event.preventDefault();
        // Affiche un nouveau string aléatoire au clic
        // setText(Math.random().toString(36).substring(2, 15));

        // Affiche Au revoir ou Bonjour
        texte === "Au revoir" ? setText("Bonjour") : setText("Au revoir");
        // ou (non ternaire)
        // if (texte === "Au revoir") {
        //     setText("Bonjour")
        // }
        // else {
        //     setText("Au revoir");
    };

    return (
        <>
            <p>{ texte }</p>
            <button onClick={handleChangeText}>Cliquez moi pour changer le texte</button>
        </>
    );
};


// CORRECTION autre façon de faire avec true 
// const Text = (props) => {
//     const [toggle, setToggle] = useState(true);

//     const handleChangeText = (event) => {
//         event.preventDefault();
//         setToggle(!toggle);
//     };
//     return (
//         <>
//             <p>{ toggle ? "Bonjour" : "Au revoir"}</p>
//             <button onClick={handleChangeText}>Cliquez moi pour changer le texte</button>
//         </>
//     );


// CORRECTION autre façon de changer aléatoirement le string
// const Text = (props) => {
//     //Afficher un string aléatoire
//     const [texte, setText] = useState("Bonjour");

//     const handleChangeText = (event) => {
//         event.preventDefault();
//         // Affiche un nouveau string aléatoire au clic
//         setText(generateRandomString());
//     };

//     // on crée une fonction qui génère un string aléatoire
//     const generateRandomString = () => {
//         return Math.random().toString(20).substring(2, 15);
//     }

//     return (
//         <>
//             <p>{texte}</p>
//             <button onClick={handleChangeText}>Cliquez moi pour changer le texte</button>
//         </>
//     );
// };

export default Text;