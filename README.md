# ExperTIC - RESTful API

Los siguiente servicios están disponibles para esta versión demo. Se hace uso de Node.js con Express.js para la parte del servidor web y MongoDB con Mongoose.js para la parte de la base de datos.

## Requisitos

- Node.js
- MongoDB

## Instalación

- Instalar dependencias ejecutando **npm install** en la raíz del proyecto
- Iniciar el servidor de base de datos usando el comando **mongod**
- Iniciar el servidor web usando el comando **node server.js** dentro del directorio del proyecto

## Demo

##### [http://expertic-experimentos.rhcloud.com/](http://expertic-experimentos.rhcloud.com/ "Demo RESTful API - ExperTIC") 

## Documentación

<table>
	<thead>
		<tr>
			<th>Header</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>APIKEY</td>
			<td>9631331C014C4CC1786D4B4DDEA7BC377797307</td>
		</tr>
	</tbody>
</table>

### Resource: Courses

#### [POST] /courses

Da de alta un curso en la plataforma ExperTIC.

**REQUEST:**

<pre>
{
	folio: "789XYZ",
	name: "RESTful API con Node.js",
	description: "Construcción de servicios web utilizando la arquitectura REST, Node.js, Express.js, MongoDB y Mongoose.js como stack de tecnologías",
	partner: "Pretzel",
	category: "Desarrollo y Sistemas",
	hours: 120,
	format: "Presencial"
}
</pre>

**RESPONSE:**

<table>
	<thead>
		<tr>
			<th>Status</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>401</td>
			<td>No se tiene autorización para consumir el servicio</td>
		</tr>
		<tr>
			<td>500</td>
			<td>Ocurrió un problema al intentar crear el curso</td>
		</tr>
		<tr>
			<td>201</td>
			<td>Curso creado</td>
		</tr>
	</tbody>
</table>

<pre>
{
	folio: "789XYZ",
	name: "RESTful API con Node.js",
	description: "Construcción de servicios web utilizando la arquitectura REST, Node.js, Express.js, MongoDB y Mongoose.js como stack de tecnologías",
	partner: "Pretzel",
	category: "Desarrollo y Sistemas",
	hours: 120,
	format: "Presencial",
	_id: "54540556b877baaf45b00b85"
}
</pre>

#### [GET] /courses

Obtiene todos los cursos dados de alta en la plataforma ExperTIC.

**RESPONSE:**

<table>
	<thead>
		<tr>
			<th>Status</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>401</td>
			<td>No se tiene autorización para consumir el servicio</td>
		</tr>
		<tr>
			<td>500</td>
			<td>Ocurrió un problema al intentar obtener los cursos</td>
		</tr>
		<tr>
			<td>200</td>
			<td>Se obtuvieron los cursos</td>
		</tr>
		<tr>
			<td>204</td>
			<td>No se encontrarón cursos</td>
		</tr>
	</tbody>
</table>

<pre>
[
	{
		folio: "789XYZ",
		name: "RESTful API con Node.js",
		description: "Construcción de servicios web utilizando la arquitectura REST, Node.js, Express.js, MongoDB y Mongoose.js como stack de tecnologías",
		partner: "Pretzel",
		category: "Desarrollo y Sistemas",
		hours: 120,
		format: "Presencial",
		_id: "54540556b877baaf45b00b85"
	}
]
</pre>

#### [GET] /courses/54540556b877baaf45b00b85

Obtiene un curso en específico usando el folio interno (autogenerado) como referencia.

**RESPONSE:**

<table>
	<thead>
		<tr>
			<th>Status</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>401</td>
			<td>No se tiene autorización para consumir el servicio</td>
		</tr>
		<tr>
			<td>500</td>
			<td>Ocurrió un problema al intentar obtener el curso</td>
		</tr>
		<tr>
			<td>200</td>
			<td>Se obtuvo el curso</td>
		</tr>
		<tr>
			<td>204</td>
			<td>No se encontro el curso</td>
		</tr>
	</tbody>
</table>

<pre>
{
	folio: "789XYZ",
	name: "RESTful API con Node.js",
	description: "Construcción de servicios web utilizando la arquitectura REST, Node.js, Express.js, MongoDB y Mongoose.js como stack de tecnologías",
	partner: "Pretzel",
	category: "Desarrollo y Sistemas",
	hours: 120,
	format: "Presencial",
	_id: "54540556b877baaf45b00b85"
}
</pre>