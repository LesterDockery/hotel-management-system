import React, { Component } from "react";

// We will use this line to divide the tables
const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5
		}}
	/>
);

export default class BookOnline extends Component {
	constructor(props) {
		super(props);

		/* 
		   Duplicates are commented out to remove the warnings but 
		   we left them there to mimic our database 
		*/

		this.state = {
			// __________________ Hotel__________________
			hotelID: 0, // primary key
			hotelName: "",
			hotelRating: "",
			address: "",
			state: "",
			city: "",
			// __________________Hotel Price__________________
			//hotelName: "", // primary key
			//hotelID: "", // foreign key
			price: "",
			// __________________Rooms__________________
			roomNumber: "", // primary key
			//hotelName: "", // foreign key
			maxPersons: "",
			//price: "",
			// __________________Room Type__________________
			typeOfRoom: "", // primary key
			//roomNumber: "", // foreign key
			//price: "",
			vacancy: "",
			// __________________Fitness Center__________________
			machineID: "", // primary key
			//hotelID: "", // foreign key
			machineName: "",
			// __________________Location__________________
			//address: "", // primary key
			//hotelID: "", // foreign key
			//city: "",
			//state: "",
			// __________________Hotel Rating__________________
			//hotelName: "", // primary key
			//hotelID: "", // foreign key
			starRating: "",
			// __________________Reservations__________________
			reservationID: "", // primary key
			//roomNumber: "", // foreign key
			currentStatus: "",
			dateIn: "",
			dateOut: "",
			madeBy: "",
			// __________________Stay Duration__________________
			dayIn: "", // primary key
			SSN: "", // foreign key
			dayOut: "",
			timeIn: "",
			timeOut: "",
			// __________________Customer__________________
			//SSN: "", // primary key
			//reservationID: "", // foreign key
			firstName: "",
			middleInitial: "",
			lastName: "",
			//address: "",
			phone: "",
			//city: "",
			//state: "",
			sex: "",
			// __________________Room Change__________________
			//reservationID: "", // primary key
			//SSN: "", // foreign key
			//roomNumber: "",
			// __________________Hotel Employee__________________
			employeeID: "", // primary key
			//firstName: "",
			//lastName: "",
			//middleInitial: "",
			//SSN: "",
			//sex: "",
			// __________________Employee Account__________________
			//SSN: "", // primary key
			//employeeID: "", // foreign key
			username: "",
			pword: "",
			clearanceLevel: "",
			// __________________Room Service__________________
			menu: "" // primary key
			//roomNumber: "", // foreign key
			//price: ""
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// _______________________________Hotel_________________________________________________
	// Create Hotel
	handleCreateHotel = e => {
		e.preventDefault();

		this.setState({
			hotelID: Math.floor(Math.random() * 1000)
		});

		let hotel = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			hotelRating: this.state.hotelRating,
			address: this.state.address,
			state: this.state.state,
			city: this.state.city
		};
		fetch("http://localhost:4000/addhotel", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(hotel)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel
	handleReadHotel = e => {
		e.preventDefault();
		fetch("http://localhost:4000/gethotel", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Hotel
	handleUpdateHotel = e => {
		e.preventDefault();
		const hotel = {
			hotelName: this.state.hotelName,
			address: this.state.address,
			state: this.state.state,
			city: this.state.city
		};
		fetch("http://localhost:4000/updatehotel/" + this.state.hotelName, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(hotel)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel
	handleDeleteHotel = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletehotel/" + this.state.hotelID, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Hotel Price___________________________________________
	// Create Hotel Price
	handleCreateHotelPrice = e => {
		e.preventDefault();
		let price = {
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID,
			price: this.state.price
		};
		fetch("http://localhost:4000/addhotelprice", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(price)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel Price
	handleReadHotelPrice = e => {
		e.preventDefault();
		fetch("http://localhost:4000/gethotelprice", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Hotel Price
	handleUpdateHotelPrice = e => {
		e.preventDefault();
		const price = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			price: this.state.price
		};
		fetch("http://localhost:4000/updatehotelprice/" + this.state.hotelID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(price)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel Price
	handleDeleteHotelPrice = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletehotelprice/" + this.state.hotelName, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Rooms_________________________________________________
	// Create Rooms
	handleCreateRoom = e => {
		e.preventDefault();
		let room = {
			roomNumber: this.state.roomNumber,
			hotelName: this.state.hotelName,
			maxPersons: this.state.maxPersons,
			price: this.state.price
		};
		fetch("http://localhost:4000/addrooms", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(room)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Rooms
	handleReadRoom = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getrooms", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Rooms
	handleUpdateRooms = e => {
		e.preventDefault();
		const room = {
			roomNumber: this.state.roomNumber,
			hotelName: this.state.hotelName,
			maxPersons: this.state.maxPersons,
			price: this.state.price
		};
		fetch("http://localhost:4000/updaterooms/" + this.state.roomNumber, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(room)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Rooms
	handleDeleteRoom = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteroom/" + this.state.roomNumber, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Room Type_____________________________________________
	// Create Room Type
	handleCreateRoomType = e => {
		e.preventDefault();
		let type = {
			typeOfRoom: this.state.typeOfRoom,
			roomNumber: this.state.roomNumber,
			vacancy: this.state.vacancy
		};
		fetch("http://localhost:4000/addroomtype", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(type)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Type
	handleReadRoomType = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getroomtype", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Room Type
	handleUpdateRoomType = e => {
		e.preventDefault();
		const room = {
			typeOfRoom: this.state.typeOfRoom,
			roomNumber: this.state.roomNumber,
			vacancy: this.state.vacancy
		};
		fetch("http://localhost:4000/updateroomtype/" + this.state.typeOfRoom, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(room)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Room Type
	handleDeleteRoomType = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteroomtype/" + this.state.typeOfRoom, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Fitness Center________________________________________
	// Create Fitness Center
	handleCreateFitnessCenter = e => {
		e.preventDefault();
		let fitnessCenter = {
			machineID: this.state.machineID,
			hotelID: this.state.hotelID,
			machineName: this.state.machineName
		};
		fetch("http://localhost:4000/addfitnesscenter", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(fitnessCenter)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Fitness Center
	handleReadFitnessCenter = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getfitnesscenter", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Fitness Center
	handleUpdateFitnessCenter = e => {
		e.preventDefault();
		const fitnessCenter = {
			machineID: this.state.machineID,
			hotelID: this.state.hotelID,
			machineName: this.state.machineName
		};
		fetch("http://localhost:4000/updatefitnesscenter/" + this.state.machineID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(fitnessCenter)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Fitness Center
	handleDeleteFitnessCenter = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletefitnesscenter/" + this.state.machineID, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Location______________________________________________
	// Create Location
	handleCreateLocation = e => {
		e.preventDefault();
		let location = {
			address: this.state.address,
			hotelID: this.state.hotelID,
			city: this.state.city,
			state: this.state.state
		};
		fetch("http://localhost:4000/addlocation", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(location)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Location
	handleReadLocation = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getlocation", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Location
	handleUpdateLocation = e => {
		e.preventDefault();
		const location = {
			address: this.state.address,
			hotelID: this.state.hotelID,
			city: this.state.city,
			state: this.state.state
		};
		fetch("http://localhost:4000/updatelocation/" + this.state.address, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(location)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Location
	handleDeleteLocation = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletelocation/" + this.state.address, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Hotel Rating__________________________________________
	// Create Hotel Rating
	handleCreateHotelRating = e => {
		e.preventDefault();
		let rating = {
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID,
			starRating: this.state.starRating
		};
		fetch("http://localhost:4000/addhotelrating", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(rating)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel Rating
	handleReadHotelRating = e => {
		e.preventDefault();
		fetch("http://localhost:4000/gethotelrating", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Hotel Rating
	handleUpdateHotelRating = e => {
		e.preventDefault();
		const rating = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			starRating: this.state.starRating
		};
		fetch("http://localhost:4000/updatehotelrating/" + this.state.hotelName, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(rating)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel Rating
	handleDeleteHotelRating = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletehotelrating/" + this.state.hotelName, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Reservations__________________________________________
	// Create Reservations
	handleCreateReservation = e => {
		e.preventDefault();
		let reservation = {
			reservationID: this.state.reservationID,
			roomNumber: this.state.roomNumber,
			currentStatus: this.state.currentStatus,
			dateIn: this.state.dateIn,
			dateOut: this.state.dateOut,
			madeBy: this.state.madeBy
		};
		fetch("http://localhost:4000/addreservation", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(reservation)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Reservations
	handleReadReservation = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getreservation", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Reservations
	handleUpdateReservation = e => {
		e.preventDefault();
		const reservation = {
			reservationID: this.state.reservationID,
			roomNumber: this.state.roomNumber,
			currentStatus: this.state.currentStatus,
			dateIn: this.state.dateIn,
			dateOut: this.state.dateOut,
			madeBy: this.state.madeBy
		};
		fetch(
			"http://localhost:4000/updatereservation/" + this.state.reservationID,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(reservation)
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Reservations
	handleDeleteReservation = e => {
		e.preventDefault();

		fetch(
			"http://localhost:4000/deletereservation/" + this.state.reservationID,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
				body: undefined
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Stay Duration_________________________________________
	// Create Stay Duration
	handleCreateStayDuration = e => {
		e.preventDefault();
		let stayDuration = {
			dayIn: this.state.dayIn,
			SSN: this.state.SSN,
			dayOut: this.state.dayOut
		};
		fetch("http://localhost:4000/addstayduration", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(stayDuration)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Stay Duration
	handleReadStayDuration = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getstayduration", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Stay Duration
	handleUpdateStayDuration = e => {
		e.preventDefault();
		const stay = {
			dayIn: this.state.dayIn,
			SSN: this.state.SSN,
			dayOut: this.state.dayOut
		};
		fetch("http://localhost:4000/updatestayduration/" + this.state.dayIn, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(stay)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Stay Duration
	handleDeleteStayDuratino = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletestayduration/" + this.state.dayIn, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Customer______________________________________________
	// Create Customer
	handleCreateCustomer = e => {
		e.preventDefault();
		let customer = {
			SSN: this.state.SSN,
			reservationID: this.state.reservationID,
			firstName: this.state.firstName,
			middleInitial: this.state.middleInitial,
			lastName: this.state.lastName,
			address: this.state.address,
			phone: this.state.phone,
			city: this.state.city,
			state: this.state.state,
			sex: this.state.sex
		};
		fetch("http://localhost:4000/addcustomer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customer)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Customer
	handleReadCustomer = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getcustomer", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Customer
	handleUpdateCustomer = e => {
		e.preventDefault();
		const customer = {
			SSN: this.state.SSN,
			reservationID: this.state.reservationID,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			middleInitial: this.state.middleInitial,
			phone: this.state.phone,
			address: this.state.address,
			state: this.state.state,
			city: this.state.city,
			sex: this.state.sex
		};
		fetch("http://localhost:4000/updatecustomer/" + this.state.SSN, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customer)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Customer
	handleDeleteCustomer = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletecustomer/" + this.state.SSN, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Room Change___________________________________________
	// Create Room Change
	handleCreateRoomChange = e => {
		e.preventDefault();
		let roomChange = {
			reservationID: this.state.reservationID,
			SSN: this.state.SSN,
			roomNumber: this.state.roomNumber
		};
		fetch("http://localhost:4000/addroomchange", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomChange)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Change
	handleReadRoomChange = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getroomchange", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Room Change
	handleUpdateRoomChange = e => {
		e.preventDefault();
		const change = {
			reservationID: this.state.reservationID,
			SSN: this.state.SSN,
			roomNumber: this.state.roomNumber
		};
		fetch(
			"http://localhost:4000/updateroomchange/" + this.state.reservationID,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(change)
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Room Change
	handleDeleteRoomChange = e => {
		e.preventDefault();

		fetch(
			"http://localhost:4000/deleteroomchange/" + this.state.reservationID,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
				body: undefined
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Hotel Employee________________________________________
	// Create Hotel Employee
	handleCreateHotelEmployee = e => {
		e.preventDefault();
		let employee = {
			employeeID: this.state.employeeID,
			firstName: this.state.firstName,
			middleInitial: this.state.middleInitial,
			lastName: this.state.lastName,
			SSN: this.state.SSN,
			sex: this.state.sex
		};
		fetch("http://localhost:4000/addhotelemployee", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(employee)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel Employee
	handleReadHotelEmployee = e => {
		e.preventDefault();
		fetch("http://localhost:4000/gethotelemployee", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Hotel Employee
	handleUpdateHotelEmployee = e => {
		e.preventDefault();
		const employee = {
			employeeID: this.state.employeeID,
			firstName: this.state.firstName,
			middleInitial: this.state.middleInitial,
			lastName: this.state.lastName,
			SSN: this.state.SSN,
			sex: this.state.sex
		};
		fetch(
			"http://localhost:4000/updatehotelemployee/" + this.state.employeeID,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(employee)
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel Employee
	handleDeleteHotelEmployee = e => {
		e.preventDefault();

		fetch(
			"http://localhost:4000/deletehotelemployee/" + this.state.employeeID,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
				body: undefined
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Employee Account______________________________________
	// Create Employee Account
	handleCreateEmployeeAccount = e => {
		e.preventDefault();
		let account = {
			SSN: this.state.SSN,
			employeeID: this.state.employeeID,
			username: this.state.username,
			pword: this.state.pword,
			clearanceLevel: this.state.clearanceLevel
		};
		fetch("http://localhost:4000/addemployeeaccount", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(account)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Employee Account
	handleReadEmployeeAccount = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getemployeeaccount", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Employee Account
	handleUpdateEmployeeAccount = e => {
		e.preventDefault();
		const account = {
			SSN: this.state.SSN,
			employeeID: this.state.employeeID,
			username: this.state.username,
			pword: this.state.pword,
			clearanceLevel: this.state.clearanceLevel,
			city: this.state.address
		};
		fetch("http://localhost:4000/updatehotel/" + this.state.SSN, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(account)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Employee Account
	handleDeleteEmployeeAccount = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteemployeeaccount/" + this.state.SSN, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Room Service__________________________________________
	// Create Room Service
	handleCreateRoomService = e => {
		e.preventDefault();
		let roomService = {
			menu: this.state.menu,
			roomNumber: this.state.roomNumber,
			price: this.state.price
		};
		fetch("http://localhost:4000/addroomservice", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomService)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Service
	handleReadRoomService = e => {
		e.preventDefault();
		fetch("http://localhost:4000/getroomservice", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Room Service
	handleUpdateRoomService = e => {
		e.preventDefault();
		const roomService = {
			menu: this.state.menu,
			roomNumber: this.state.roomNumber,
			price: this.state.price
		};
		fetch("http://localhost:4000/updateroomservice/" + this.state.menu, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomService)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Room Service
	handleDeleteRoomService = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteroomservice/" + this.state.menu, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	//  **********************End of Queries*************************************

	render() {
		return (
			<main>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateHotel}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								{/*
								We removed this and now set the state of
								hotelID as a random int for security
								~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div> */}
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control input-lg"
										name="state"
										id="state"
										required
										onChange={this.handleChange}
									>
										<option value="">Select State...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="city"
										id="city"
										placeholder="City"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Hotel
								</button>
								<h1>{/* This is where DONE will go */}</h1>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateHotel}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								{/* <div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div> */}
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control input-lg"
										name="state"
										id="state"
										required
										onChange={this.handleChange}
									>
										<option value="">Select State...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="city"
										id="city"
										placeholder="City"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Hotel
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteHotel}>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>

								<button type="submit" className="btn button btn-lg">
									Delete Hotel
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Hotels </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Hotels"
										className="btn button btn-lg"
										required
										onClick={this.handleReadHotel}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Hotel Price </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateHotelPrice}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="price"
										id="price"
										placeholder="Price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Hotel Price
								</button>
								<h1>{this.state.address}</h1>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Hotel Price </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateHotelPrice}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="price"
										id="price"
										placeholder="Price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Hotel Price
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Hotel Price </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteHotelPrice}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Hotel Price
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Hotel Prices </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Hotel Prices"
										className="btn button btn-lg"
										required
										onClick={this.handleReadHotelPrice}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Room </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateRoom}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group">
									<input
										type="text"
										name="maxPersons"
										id="maxPersons"
										placeholder="Max Number of Guests"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="price"
										id="price"
										placeholder="Price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Room
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Room </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateRooms}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group">
									<input
										type="text"
										name="maxPersons"
										id="maxPersons"
										placeholder="Max Number of Guests"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="price"
										id="price"
										placeholder="Price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Room
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Room </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteRoom}>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Room
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Rooms </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Rooms"
										className="btn button btn-lg"
										required
										onClick={this.handleReadRoom}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Room Type </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateRoomType}>
								<div className="form-group">
									<input
										type="text"
										name="typeOfRoom"
										id="typeOfRoom"
										placeholder="Type of Room"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="vacancy"
										id="vacancy"
										placeholder="Vacancy"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Room Type
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Room Type</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateRoomType}>
								<div className="form-group">
									<input
										type="text"
										name="typeOfRoom"
										id="typeOfRoom"
										placeholder="Type of Room"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="vacancy"
										id="vacancy"
										placeholder="Vacancy"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Room Type
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Room Type </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteRoomType}>
								<div className="form-group">
									<input
										type="text"
										name="typeOfRoom"
										id="typeOfRoom"
										placeholder="Type of Room"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Room Type
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Room Types </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Room Types"
										className="btn button btn-lg"
										required
										onClick={this.handleReadRoomType}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Fitness Center </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateFitnessCenter}>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="machineID"
										id="machineID"
										placeholder="Machine ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="machineName"
										id="machineName"
										placeholder="MachineName"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Fitness Center
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Fitness Center </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateFitnessCenter}>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="machineID"
										id="machineID"
										placeholder="Machine ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="machineName"
										id="machineName"
										placeholder="MachineName"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Fitness Center
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Fitness Center </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteFitnessCenter}>
								<div className="form-group">
									<input
										type="text"
										name="machineID"
										id="machineID"
										placeholder="Machine ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Fitness Center
								</button>
								<h1>{this.state.responseInventoryDeleted}</h1>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Fitness Centers </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Fitness Centers"
										className="btn button btn-lg"
										required
										onClick={this.handleReadFitnessCenter}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Location </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateLocation}>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="city"
										id="city"
										placeholder="City"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control input-lg"
										name="State"
										id="State"
										required
										onChange={this.handleChange}
									>
										<option value="">Select State...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>

								<button type="submit" className="btn button btn-lg">
									Create Location
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Location </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateLocation}>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="city"
										id="city"
										placeholder="City"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control input-lg"
										name="State"
										id="State"
										required
										onChange={this.handleChange}
									>
										<option value="">Select State...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Location
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Location </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteLocation}>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Location
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Locations </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Locations"
										className="btn button btn-lg"
										required
										onClick={this.handleReadLocation}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Hotel Rating </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateHotelRating}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="starRating"
										id="starRating"
										placeholder="Star Rating"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Hotel Rating
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Hotel Rating</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateHotelRating}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										name="starRating"
										id="starRating"
										placeholder="Star Rating"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Hotel Rating
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Hotel Rating</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteHotelRating}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Hotel Rating
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Hotel Ratings </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Hotel Ratings"
										className="btn button btn-lg"
										required
										onClick={this.handleReadHotelRating}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Reservation </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateReservation}>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="currentStatus"
										id="currentStatus"
										placeholder="Current Status"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dateIn"
										id="dateIn"
										placeholder="Date In"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dateOut"
										id="dateOut"
										placeholder="Date Out"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="madeBy"
										id="madeBy"
										placeholder="Made By"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Reservation
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Reservation </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateReservation}>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="currentStatus"
										id="currentStatus"
										placeholder="Current Status"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dateIn"
										id="dateIn"
										placeholder="Date In"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dateOut"
										id="dateOut"
										placeholder="Date Out"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="madeBy"
										id="madeBy"
										placeholder="Made By"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Reservation
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Reservation </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteReservation}>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Reservation
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Reservations </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Reservations"
										className="btn button btn-lg"
										required
										onClick={this.handleReadReservation}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Customer</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateCustomer}>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="middleInitial"
										id="middleInitial"
										placeholder="Middle Initial"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="lastName"
										id="lastName"
										placeholder="Last Name"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="sex"
										id="sex"
										placeholder="Sex"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="city"
										id="city"
										placeholder="City"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control input-lg"
										name="State"
										id="State"
										required
										onChange={this.handleChange}
									>
										<option value="">Select State...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="phone"
										id="phone"
										placeholder="Phone Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Customer
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Customer </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateCustomer}>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="middleInitial"
										id="middleInitial"
										placeholder="Middle Initial"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="lastName"
										id="lastName"
										placeholder="Last Name"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="sex"
										id="sex"
										placeholder="Sex"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="city"
										id="city"
										placeholder="City"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control input-lg"
										name="State"
										id="State"
										required
										onChange={this.handleChange}
									>
										<option value="">Select State...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="phone"
										id="phone"
										placeholder="Phone Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Customer
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Customer </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteCustomer}>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Customer
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Customer </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Customers"
										className="btn button btn-lg"
										required
										onClick={this.handleReadCustomer}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Stay Duration</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateStayDuration}>
								<div className="form-group">
									<input
										type="text"
										name="dayIn"
										id="dayIn"
										placeholder="Day In"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dayOut"
										id="dayOut"
										placeholder="Day Out"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="timeIn"
										id="timeIn"
										placeholder="Check-in Time"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="timeOut"
										id="timeOut"
										placeholder="Checkout Time"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Stay Duration
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Stay Duration</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateStayDuration}>
								<div className="form-group">
									<input
										type="text"
										name="dayIn"
										id="dayIn"
										placeholder="Day In"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dayOut"
										id="dayOut"
										placeholder="Day Out"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="timeIn"
										id="timeIn"
										placeholder="Check-in Time"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="timeOut"
										id="timeOut"
										placeholder="Checkout Time"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Stay Duration
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Stay Duration </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteStayDuratino}>
								<div className="form-group">
									<input
										type="text"
										name="dayIn"
										id="dayIn"
										placeholder="Day In"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Stay Duration
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Stay Durations </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Stay Durations"
										className="btn button btn-lg"
										required
										onClick={this.handleReadStayDuration}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Room Change</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateRoomChange}>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Room Change
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Room Change</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateRoomChange}>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Room Change
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Room Change </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteRoomChange}>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Room Change
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Room Changes </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Room Changes"
										className="btn button btn-lg"
										required
										onClick={this.handleReadRoomChange}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Hotel Employee </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateHotelEmployee}>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="middleInitial"
										id="middleInitial"
										placeholder="Middle Initial"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="lastName"
										id="lastName"
										placeholder=" Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="sex"
										id="sex"
										placeholder="Sex"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="employeeID"
										id="employeeID"
										placeholder="Employee ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Hotel Employee
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Hotel Employee </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateHotelEmployee}>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="middleInitial"
										id="middleInitial"
										placeholder="Middle Initial"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="lastName"
										id="lastName"
										placeholder=" Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="sex"
										id="sex"
										placeholder="Sex"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="employeeID"
										id="employeeID"
										placeholder="Employee ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Hotel Employee
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Hotel Employee </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteHotelEmployee}>
								<div className="form-group">
									<input
										type="text"
										name="employeeID"
										id="employeeID"
										placeholder="Employee ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Hotel Employee
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Hotel Employees </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Employees"
										className="btn button btn-lg"
										required
										onClick={this.handleReadHotelEmployee}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Employee Account </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateEmployeeAccount}>
								<div className="form-group">
									<input
										type="text"
										name="username"
										id="username"
										placeholder="Username"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="pword"
										id="pword"
										placeholder="Password"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="employeeID"
										id="employeeID"
										placeholder="Employee ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="clearanceLevel"
										id="clearanceLevel"
										placeholder="Clearance Level"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Employee Account
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Employee Account</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateEmployeeAccount}>
								<div className="form-group">
									<input
										type="text"
										name="username"
										id="username"
										placeholder="Username"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="pword"
										id="pword"
										placeholder="Password"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="employeeID"
										id="employeeID"
										placeholder="Employee ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="clearanceLevel"
										id="clearanceLevel"
										placeholder="Clearance Level"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Employee Account
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Employee Account </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteHotelEmployee}>
								<div className="form-group">
									<input
										type="text"
										name="SSN"
										id="SSN"
										placeholder="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Employee Account
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Employee Accounts </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Employee Accounts"
										className="btn button btn-lg"
										required
										onClick={this.handleReadEmployeeAccount}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ColoredLine color="red" />
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Create Room Service</h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleCreateRoomService}>
								<div className="form-group">
									<input
										type="text"
										name="menu"
										id="menu"
										placeholder="Menu"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="price"
										id="price"
										placeholder="Price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Room Service
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Update Room Service </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleUpdateRoomService}>
								<div className="form-group">
									<input
										type="text"
										name="menu"
										id="menu"
										placeholder="Menu"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="roomNumber"
										id="roomNumber"
										placeholder="Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="price"
										id="price"
										placeholder="Price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Room Service
								</button>
							</form>
						</div>
					</div>
				</section>

				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Delete Room Service </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form onSubmit={this.handleDeleteRoomService}>
								<div className="form-group">
									<input
										type="text"
										name="menu"
										id="menu"
										placeholder="Menu"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Room Service
								</button>
							</form>
						</div>
					</div>
				</section>
				<section style={{ width: "50%" }}>
					<div className="page-header">
						<h2>Get Room Services </h2>
					</div>
					<div className="row">
						<div className="col-md-8">
							<form>
								<div className="form-group">
									<input
										type="button"
										name="hotelID"
										id="hotelID"
										value="Get Room Services"
										className="btn button btn-lg"
										required
										onClick={this.handleReadRoomService}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>
		);
	}
}
