const app = require('express')()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

// Create connection
const db = mysql.createConnection({
    host: 'localhost', //'triton.towson.edu',
    user: 'root', //'rcarte14',
    password: 'password', //'Cosc*77fe',
    database: 'Marriott', // 'rcarte14db',
})

// Connect
db.connect(err => {
    if (err) {
        throw err
    }
    console.log('MySql Connected...')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Test
// app.get('/', (req, res) => res.json({ msg: 'Hello' }))

// // Create Db <---- testing pt 2
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE Marriott'
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         console.log(result)
//         res.send('database created')
//     })
// })

// _________________________Hotel______________________________________________
// Create hotel
app.post('/addhotel', (req, res) => {
    let hotel = {
        hotelID: req.body.hotelID,
        hotelName: req.body.hotelName,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
    }
    let sql = 'INSERT INTO Hotel SET ?'
    db.query(sql, hotel, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Hotel created' })
    })
})

// Read hotel
app.get('/gethotel', (req, res) => {
    let sql = 'SELECT * FROM Hotel'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update hotel
app.patch('/updatehotel/:hotelID', (req, res) => {
    let newHotel = 'Updated Hotel'

    let hotelUpdate = {
        hotelID: req.body.hotelID,
        hotelName: req.body.hotelName,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
    }

    let sql = `UPDATE Hotel SET ? WHERE hotelID = ?`
    db.query(sql, [hotelUpdate, req.params.id], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Hotel Updated' })
    })
})

// Delete hotel
app.get('/deletehotel/:hotelID', (req, res) => {
    let sql = `DELETE FROM Hotel WHERE hotelID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        //console.log(result);
        res.status(200).json({ success: 'Hotel Deleted' })
        //res.send('Reservation Deleted...');
    })
})

// // ____________Hotel price_____________________________________________________
// Create hotel price
app.post('/addhotelprice', (req, res) => {
    let hotel = {
        hotelName: req.body.hotelName,
        hotelID: req.body.hotelID,
        price: req.body.price,
    }
    let sql = 'INSERT INTO HotelPrice SET ?'
    db.query(sql, hotel, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Hotel price created' })
    })
})

// Read hotel price
app.get('/gethotelprice', (req, res) => {
    let sql = 'SELECT * FROM HotelPrice'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update hotel price
app.patch('/updatehotelprice/:hotelID', (req, res) => {
    let newHotelPrice = 'Updated HotelPrice'
    let hotelPriceUpdate = {
        hotelName: req.body.hotelName,
        hotelID: req.body.hotelID,
        price: req.body.price,
    }
    let sql = `UPDATE HotelPrice SET ? WHERE HotelID = ?`
    db.query(sql, [hotelPriceUpdate, req.body.hotelID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelPrice updated' })
    })
})

// Delete hotel price
app.get('/deletehotelprice/:hotelID', (req, res) => {
    let sql = `DELETE FROM HotelPrice WHERE hotelID = ?`
    let query = db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        //res.send('Hotel price deleted...');
        res.status(200).json({ success: 'HotelPrice deleted' })
    })
})

// __________________________Rooms___________________________________________________
// Create rooms
app.post('/addroom', (req, res) => {
    let room = {
        roomNumber: req.body.roomNumber,
        hotelRoom: req.body.hotelRoom,
        maxPersons: req.body.maxPersons,
        price: req.body.price,
    }
    let sql = 'INSERT INTO Room SET ?'
    db.query(sql, room, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Room created' })
    })
})

// Read rooms
app.get('/getrooms', (req, res) => {
    let sql = 'SELECT * FROM Room'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update rooms
app.patch('/updaterooms/:roomNumber', (req, res) => {
    //let newRooms = 'Updated Rooms'
    let roomsUpdate = {
        Equip_name: req.body.Equip_name,
        Price: req.body.Price,
    }
    let sql = `UPDATE Rooms SET ? WHERE roomNumber = ?`
    db.query(sql, [req.body, req.body.roomNumber], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Rooms Updated' })
    })
})

// Delete rooms
app.get('/deleteroom/:roomNumber', (req, res) => {
    let sql = `DELETE FROM Rooms WHERE roomNumber = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Room Deleted' })
    })
})
// __________________________Room type_______________________________________________
// Create room type
app.post('/addroomtype', (req, res) => {
    let roomType = {
        typeOfRoom: req.body.typeOfRoom,
        roomNumber: req.body.roomNumber,
        price: req.body.price,
        vacancy: req.body.vacancy,
    }
    let sql = 'INSERT INTO RoomType SET ?'
    db.query(sql, roomType, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomType Created' })
    })
})

// Read room type
app.get('/getroomtype', (req, res) => {
    let sql = 'SELECT * FROM RoomType'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update room type
// I kept :id, change to primary key (typeOfRoom) if not working
app.patch('/updateroomtype/:id', (req, res) => {
    let newRoomType = 'Updated RoomtType'
    let roomTypeUpdate = {
        typeOfRoom: req.body.typeOfRoom,
        roomNumber: req.body.roomNumber,
        price: req.body.price,
        vacancy: req.body.vacancy,
    }
    let sql = `UPDATE RoomType SET ? WHERE typeOfRoom = ?`
    db.query(sql, [req.body, req.body.typeOfRoom], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomType Updated' })
    })
})
// Delete room type
app.get('/deleteroomtype/:typeOfRoom', (req, res) => {
    let sql = `DELETE FROM manager WHERE typeOfRoom = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomType Deleted' })
    })
})

// ___________________________Fitness center__________________________________________
// Create fitness center
app.post('/addfitnesscenter', (req, res) => {
    let fitnessCenter = {
        machineID: req.body.machineID,
        hotelID: req.body.hotelID,
        machineName: req.body.machineName,
    }
    let sql = 'INSERT INTO FitnessCenter SET ?'
    db.query(sql, fitnessCenter, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'FitnessCenter Created' })
    })
})
// Read fitness center
app.get('/getfitnesscenter', (req, res) => {
    let sql = 'SELECT * FROM FitnessCenter'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update fitness center
app.patch('/updatefitnesscenter/:machineID', (req, res) => {
    let newFitnessCenter = {
        machineID: req.body.machineID,
        hotelID: req.body.hotelID,
        machineName: req.body.machineName,
    }
    let sql = `UPDATE FitnessCenter SET ? WHERE machineID = ?`
    db.query(sql, [req.body, req.body.machineID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('FitnessCenter updated...')
    })
})
// Delete fitness center
app.get('/deletefitnesscenter/:machineID', (req, res) => {
    let sql = `DELETE FROM FitnessCenter WHERE machineID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('FitnessCenter Deleted...')
    })
})
// ___________________________Location__________________________________________________
// Create location
app.post('/addlocation', (req, res) => {
    let location = {
        hotelID: req.body.hotelID,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
    }
    let sql = 'INSERT INTO Location SET ?'
    db.query(sql, location, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Location created' })
    })
})

// Read location
app.get('/getlocation', (req, res) => {
    let sql = 'SELECT * FROM Location'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update location
app.patch('/updatelocation/:id', (req, res) => {
    let newLocation = 'Updated Location'
    let locationUpdate = {
        hotelID: req.body.hotelID,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
    }
    let sql = `UPDATE Location SET ? WHERE hotelID = ?`

    // ****try changing req.body to locationUpdate if not working****
    db.query(sql, [req.body, req.body.hotelID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Location Updated' })
    })
})
// Delete location
app.get('/deletelocation/:address', (req, res) => {
    let sql = `DELETE FROM Location WHERE address = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Location Deleted' })
    })
})
// ______________________________Hotel rating____________________________________________
// Create hotel rating
app.post('/addhotelrating', (req, res) => {
    let hotelRating = {
        hotelName: req.body.hotelName,
        hotelID: req.body.hotelID,
        starRating: req.body.starRating,
    }
    let sql = 'INSERT INTO HotelRating SET ?'
    db.query(sql, hotelRating, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelRating Created' })
    })
})
// Read hotel rating
app.get('/gethotelrating', (req, res) => {
    let sql = 'SELECT * FROM HotelRating'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update hotel rating
app.patch('/updatehotelrating/:hotelName', (req, res) => {
    let newHotelRating = 'Updated HotelRating'
    let hotelRatingUpdate = {
        hotelName: req.body.hotelName,
        hotelID: req.body.hotelID,
        starRating: req.body.starRating,
    }
    let sql = `UPDATE HotelRating SET ? WHERE hotelName = ?`
    db.query(sql, [req.body, req.body.hotelName], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelRating Updated' })
    })
})

// Delete hotel rating
app.get('/deletehotelrating/:hotelName', (req, res) => {
    let sql = `DELETE FROM HotelRating WHERE hotelName = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelRating Deleted' })
    })
})

//_______________________________Reservations____________________________________________
// Create reservations
app.post('/addreservation', (req, res) => {
    let reservation = {
        reservationID: req.body.reservationID,
        roomNumber: req.body.roomNumber,
        currentStatus: req.body.currentStatus,
        dateIn: req.body.dateIn,
        dateOut: req.body.dateOut,
        madeBy: req.body.madeBy,
    }
    let sql = 'INSERT INTO Reservations SET ?'
    db.query(sql, reservation, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Reservation Created' })
    })
})
// Read reservations
app.get('/reservations', (req, res) => {
    let sql = 'SELECT * FROM reservations'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update reservations
app.patch('/reservations/:reservationID', (req, res) => {
    let newReservation = 'Updated Customer'
    let reservationUpdate = {
        reservationID: req.body.reservationID,
        roomNumber: req.body.roomNumber,
        currentStatus: req.body.currentStatus,
        dateIn: req.body.dateIn,
        dateOut: req.body.dateOut,
        madeBy: req.body.madeBy,
    }
    let sql = `UPDATE Reservations SET ? WHERE reservationID = ?`
    db.query(sql, [req.body, req.body.reservationID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Reservations Updated' })
    })
})
// Delete reservations
app.get('/deletereservation/:reservatinID', (req, res) => {
    let sql = `DELETE FROM Reservation WHERE reservationID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        //res.send('Reservation Deleted...');
        res.status(200).json({ success: 'Reservation Deleted' })
    })
})
// _______________________________Stay duration___________________________________________
// Create stay duration
app.post('/addstayduration', (req, res) => {
    let stay = {
        dayIn: req.body.dayIn,
        SSN: req.body.SSN,
        dayOut: req.body.dayOut,
    }
    let sql = 'INSERT INTO StayDuration SET ?'
    db.query(sql, stay, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'StayDuration Created' })
    })
})
// Read stay duration
app.get('/getstayduration', (req, res) => {
    let sql = 'SELECT * FROM StayDuration'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update stay duration
app.patch('/updatestayduration/:dayIn', (req, res) => {
    let newStayDuration = 'Updated StayDuration'
    let stayDurationUpdate = {
        dayIn: req.body.dayIn,
        SSN: req.body.SSN,
        dayOut: req.body.dayOut,
    }
    let sql = `UPDATE StayDuration SET ? WHERE dayIn = ?`
    db.query(sql, [req.body, req.body.dayIn], (err, result) => {
        if (err) throw err
        console.log(result)
        //res.send('Merchandise updated...');
        res.status(200).json({ success: 'Merchandise Updated' })
    })
})
// Delete stay duration
app.get('/deletestayduration/:dayIn', (req, res) => {
    let sql = `DELETE FROM StayDuration WHERE dayIn = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'StayDuration Deleted' })
    })
})
// _________________________________Customer______________________________________________
// Create customer
app.post('/addcustomer', (req, res) => {
    let customer = {
        SSN: req.body.SSN,
        reservationID: req.body.reservationID,
        firstName: req.body.firstName,
        middleInitial: req.body.middleInitial,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone,
        city: req.body.city,
        state: req.body.state,
        sex: req.body.sex,
    }
    let sql = 'INSERT INTO Customer SET ?'
    db.query(sql, customer, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Customer Created' })
    })
})

// Read customer
app.get('/getcustomer', (req, res) => {
    let sql = 'SELECT * FROM Customer'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update customer
app.patch('/updatecustomer/:SSN', (req, res) => {
    let newCustomer = 'Updated Customer'
    let customerUpdate = {
        SSN: req.body.SSN,
        reservationID: req.body.reservationID,
        firstName: req.body.firstName,
        middleInitial: req.body.middleInitial,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone,
        city: req.body.city,
        state: req.body.state,
        sex: req.body.sex,
    }
    let sql = `UPDATE Customer SET ? WHERE SSN = ?`
    db.query(sql, [req.body, req.body.SSN], (err, result) => {
        if (err) throw err
        console.log(result)
        //res.send('Customer Info updated...');
        res.status(200).json({ success: 'Customer Updated' })
    })
})
// Delete customer
app.get('/deletecustomer/:SSN', (req, res) => {
    let sql = `DELETE FROM Customer WHERE SSN = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Customer Deleted' })
    })
})
// _________________________________Room change______________________________________________
// Create room change
app.post('/addroomchange', (req, res) => {
    let roomchange = {
        reservationID: req.body.reservationID,
        SSN: req.body.SSN,
        roomNumber: req.body.roomNumber,
    }
    let sql = 'INSERT INTO RoomChange SET ?'
    db.query(sql, roomchange, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomChange Created' })
    })
})
// Read room change
app.get('/getroomchange', (req, res) => {
    let sql = 'SELECT * FROM RoomChange'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update room change
app.patch('/updateroomchange/:reservationID', (req, res) => {
    let roomchangeUpdate = {
        reservationID: req.body.reservationID,
        SSN: req.body.SSN,
        roomNumber: req.body.roomNumber,
    }
    let sql = `UPDATE Customer SET ? WHERE SSN = ?`
    db.query(sql, [req.body, req.body.reservationID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomChange Updated' })
    })
})
// Delete room change
app.get('/deleteroomchange/:reservationID', (req, res) => {
    let sql = `DELETE FROM Customer WHERE reservationID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomChange Deleted' })
    })
})
// _________________________________Hotel employee______________________________________________
// Create hotel employee
app.post('/addhotelemployee', (req, res) => {
    let employee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        SSN: req.body.SSN,
        employeeID: req.body.employeeID,
        sex: req.body.sex,
    }
    let sql = 'INSERT INTO HotelEmployee SET ?'
    db.query(sql, employee, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelEmployee Created' })
    })
})
// Read hotel employee
app.get('/gethotelemployee', (req, res) => {
    let sql = 'SELECT * FROM HotelEmployee'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update hotel employee
app.patch('/updatehotelemployee/:employeeID', (req, res) => {
    let employee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        SSN: req.body.SSN,
        employeeID: req.body.employeeID,
        sex: req.body.sex,
    }
    let sql = `UPDATE HotelEmployee SET ? WHERE employeeID = ?`
    db.query(sql, [req.body, req.body.employeeID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelEmployee Updated' })
    })
})
// Delete hotel employee
app.get('/deletehotelemployee/:employeeID', (req, res) => {
    let sql = `DELETE FROM HotelEmployee WHERE employeeID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelEmployee Deleted' })
    })
})
// _________________________________Employee account______________________________________________
// Create employee account
app.post('/addemployeeaccount', (req, res) => {
    let employee = {
        SSN: req.body.SSN,
        employeeID: req.body.employeeID,
        username: req.body.username,
        pword: req.body.pword,
        clearanceLevel: req.body.clearanceLevel,
    }
    let sql = 'INSERT INTO EmployeeAccount SET ?'
    db.query(sql, employee, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'EmployeeAccount Created' })
    })
})
// Read employee account
app.get('/getemployeeaccount', (req, res) => {
    let sql = 'SELECT * FROM EmployeeAccount'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update employee account
app.patch('/updateemployeeaccount/:SSN', (req, res) => {
    let employee = {
        SSN: req.body.SSN,
        employeeID: req.body.employeeID,
        username: req.body.username,
        pword: req.body.pword,
        clearanceLevel: req.body.clearanceLevel,
    }
    let sql = `UPDATE EmployeeAccount SET ? WHERE SSN = ?`
    db.query(sql, [req.body, req.body.employeeID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelEmployee Updated' })
    })
})
// Delete employee account
app.get('/deleteemployeeaccount/:SSN', (req, res) => {
    let sql = `DELETE FROM EmployeeAccount WHERE SSN = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'EmployeeAccount Deleted' })
    })
})

// _________________________________Room service______________________________________________
// Create room service
app.post('/addroomservice', (req, res) => {
    let roomservice = {
        menu: req.body.menu,
        roomNumber: req.body.roomNumber,
        price: req.body.price,
    }
    let sql = 'INSERT INTO RoomService SET ?'
    db.query(sql, roomservice, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomService Created' })
    })
})
// Read room service
app.get('/getroomservice', (req, res) => {
    let sql = 'SELECT * FROM RoomService'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update room service
app.patch('/updateroomservice/:menu', (req, res) => {
    let roomservice = {
        menu: req.body.menu,
        roomNumber: req.body.roomNumber,
        price: req.body.price,
    }
    let sql = `UPDATE EmployeeAccount SET ? WHERE SSN = ?`
    db.query(sql, [req.body, req.body.menu], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomService Updated' })
    })
})
// Delete room service
app.get('/deleteroomservice/:menu', (req, res) => {
    let sql = `DELETE FROM RoomService WHERE menu = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomService Deleted' })
    })
})
// ________________________End of Queries________________________________________
app.listen('4000', () => {
    console.log('Server started on Port 4000')
})
