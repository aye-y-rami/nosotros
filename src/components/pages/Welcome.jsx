import React from "react";
import Page from "../general/Page";
import { Text, VStack } from "@chakra-ui/react";

const Welcome = () => {
	return (
		<Page
			nextSection={{ name: "Primer beso", route: "primer-beso" }}
			imagePath="images/bienvenida.jpg"
			title="Bienvenida a nuestra página"
		>
			<VStack spacing={5} mt="5">
				<Text>
					Si estás acá, supongo que ya sabrás por qué. En esta página voy a
					hacer el mejor intento en plasmar el amor que hemos desprendido
					durante ya más de 3 años. Es una tarea difícil desde ya, porque han
					pasado un millón de cosas en todo este tiempo y realmente hay mucho
					amor, ñoñadas, comedia y hasta tragedia que contar. Tomalo como un
					altar creado para inmortalizar nuestro amol. Pase lo que pase, jamás
					voy a dar de baja esta página.
				</Text>
				<Text>
					Abajo de cada sección voy a dejar dos botones para volver a la sección
					anterior o ir a la siguiente. También podés tocar el ícono de bien
					arriba a la izquierda en la página con forma de hamburguesa para ver
					todas las secciones e ir a la que más te guste.
				</Text>
				<Text>
					También voy a agregar más adelante la sección de galería, donde voy a
					subir todas las fotos de nuestro amor que sean aptas para todo público
					para verlas de una forma fácil y rápida cuando más gustes. Espero que
					disfrutes este proyecto que seguramente irá creciendo.
				</Text>
				<Text>
					Ah, y si el cian ya no es tu color favorito podés cambiarlo desde el
					botón del pincelito.
				</Text>
				<Text textAlign="end" fontStyle="italic" w="100%">
					Con amor, Rami.
				</Text>
			</VStack>
		</Page>
	);
};

export default Welcome;
