# Canary
A RESTful CRUD API for the [JPCP's](https://sites.google.com/view/alecrlindsay/research/jp-chickadee-project "Project Website") public portal website.

![alt text](https://github.com/jp-chickadee-project/jesting/blob/master/src/logo1.90fadfe.png "JPCP")

### Prereqs

1) [Node.js](https://nodejs.org/en/download/ "Nodejs Official Website")
2) [npm](https://www.npmjs.com/get-npm "npm Official Website")(should come with Nodejs)
3) [MySQL](https://www.mysql.com/downloads/ "MySQL Official Website")
4) The MChickadees.sql file

### Installation

1) Clone directory
2) Run `npm install`

### Configuration

1. In MySQL
    1. Create a USER and DATABASE
2. Load MChickadees.sql into MySQL via the command line
    1. `mysql -u USER -p DATABASE < /path/to/MChickadees.sql` (Make sure you're in the same directory as MChickadees.sql)
3. Open "config.js"
    1. Change "serverUrl", "port", "database", "mysqlUser", and "mysqlPass" to match your system's configuration

### Running

Run `npm run start` in project directory

### Testing

Test the API by running `npm test` or `npm debug`.

### Progress

**Bolded** text in "Tested By" signifies that it's done

##### Feeders


| Interaction   | Verb   | Endpoint                                                | Returns                                  | Tested By
|---------------|--------|---------------------------------------------------------|------------------------------------------|-----------------------
| All Feeders   | GET    | /api/feeders                                            | List of all feeders                      | getAllFeeders
| Create Feeder | POST   | /api/feeders                                            | The created feeder                       | createFeeder
| Feeder by ID  | GET    | /api/feeders/{feederID}                                 | The specified feeder                     | getFeederById
| Update by ID  | PUT    | /api/feeders/{feederID}                                 | The updated feeder                       | updateFeeder
| Delete by ID  | DELETE | /api/feeders/{feederID}                                 | The empty object {}                      | deleteFeeder

##### Birds

| Interaction   | Verb   | Endpoint                                                | Returns                                  | Tested By              
|---------------|--------|---------------------------------------------------------|------------------------------------------|------------------------
| All Birds     | GET    | /api/birds                                              | List of all birds                        | **getAllBirds**            
| Create Bird   | POST   | /api/birds                                              | The created bird                         | createBird             
| Bird by ID    | GET    | /api/birds/{rfid}                                       | The specified bird                       | getBirdByRfid
| Update by ID  | PUT    | /api/birds/{rfid}                                       | The updated bird                         | updateBirdByRfid
| Delete by ID  | DELETE | /api/birds/{rfid}                                       | The empty object {}                      | deleteBirdByRfid
| Bird Options  | GET    | /api/birds/options                                      | List of bird options                     | getBirdOptions

##### Visits

| Interaction   | Verb   | Endpoint           | Returns                        | Parameters                   | Tested By
|---------------|--------|--------------------|--------------------------------|------------------------------|----------------------
| Add Visit     | POST   | /api/visits        | The created visit              |                              | addVisit              
| Visit Range   | GET    | /api/visits        | List of matching visits        | rfid, feederID, start, end   | getVisitInRange      
| Latest Visits | GET    | /api/visits/latest | List of matching latest visits | rfid, feederID, limit        | getLatestVisits    
