import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OpenFoodFactApi() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [food, setFood] = useState([]);

  let { id } = useParams();

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  //3017620429484
  useEffect(() => {
    fetch("https://world.openfoodfacts.org/api/v0/product/" + id + ".json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setFood(result.product);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
        <h1>
          [{food.code}] {food.product_name}
        </h1>
        <img src={food.image_front_url} />
      </div>
    );
  }
}

export default function Login() {
  return (
    <div className="Login">
      <OpenFoodFactApi />
    </div>
  );
}
