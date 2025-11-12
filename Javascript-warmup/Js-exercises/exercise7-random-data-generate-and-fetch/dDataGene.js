import mongoose from "mongoose";
import express from "express";
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/dummydatagenerator", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
        console.error("Connection Error:", err);
        process.exit(1); 
    });


const names = ["ashish", "harsh", "durwa", "sneha", "vir", "palak"];
const rolls = [1, 2, 3, 4, 5, 6];
const places = ["nagpur", "bhandara", "pune", "akola", "mumbai", "kuthond"];


function randSelector(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


const UserSchema = new mongoose.Schema({
    name: String, 
    rollNo: Number,
    place: String
});

const User = mongoose.model("User", UserSchema);


app.get("/add-user", async (req, res) => {
    try {
        const add = await User.create([{
            name: randSelector(names),
            rollNo: randSelector(rolls),
            place: randSelector(places)
        }]);

        res.json({ message: "User added successfully"});
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Error inserting user" });
    }
});


app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Error fetching users" });
    }
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



//RANDOM BUSINESS NAME GENERATOR

// // p1 - objetc ko as a array use kiye hai
// let obj1 = {
//     1: "crazy",
//     2: "amazing",
//     3: "fire"
// };
// let obj2 = {
//     1: "engine",
//     2: "food",
//     3: "garments"
// };
// let obj3 = {
//     1: "bros",
//     2: "limited",
//     3: "hub"
// };

// var rand1 = Math.floor(Math.random() * 2) + 1;
// var rand2 = Math.floor(Math.random() * 2) + 1;
// var rand3 = Math.floor(Math.random() * 2) + 1;
// console.log(obj1[rand1] + " " + obj2[rand2] + " " + obj3[rand3]);

/*

 // p2
 const set1 ="crazy,amazing,fire";
const set2 ="engine,food,garments";
const set3 ="bros,limited,hub";

function randomWord(set){
    const words = set.split(',');
    const randomIndex = Math.floor(Math.random() * (words.length -1));
    return words[randomIndex];
}

const randomSet1 = randomWord(set1);
const randomSet2 = randomWord(set2);
const randomSet3 = randomWord(set3);
 const businessName  = `${randomSet1} ${randomSet2} ${randomSet3}`; 
 console.log(businessName);
 
 */