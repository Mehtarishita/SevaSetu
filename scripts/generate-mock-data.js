const fs = require('fs');

function rand(n){return Math.floor(Math.random()*n)}

const first = ["Aarav","Vivaan","Aditya","Vihaan","Arjun","Saanvi","Aditi","Ananya","Ishaan","Karan","Priya","Sneha","Rohit","Neha","Riya","Kavya","Siddharth","Manav","Deepak","Sunita","Rahul","Pooja","Vikram","Meera","Karanveer","Bhavana","Ramesh","Geeta","Arjunesh","Lakshmi","Shreya","Gaurav","Nisha","Anil","Tara","Sameer","Smita","Kunal","Ankita","Mohit","Anu","Harsh","Divya","Sahil","Raj","Komal","Yash","Kiran","Pankaj"];
const last = ["Sharma","Patel","Singh","Gupta","Kumar","Joshi","Reddy","Mehta","Nair","Khan","Desai","Ahuja","Iyer","Nanda","Chopra","Bhat","Verma","Saxena","Malhotra","Kapoor"];
const skills = ["First Aid","Crowd Management","Logistics","Translator","Medical","Security"];
const languages = ["Hindi","English","Marathi","Gujarati","Bengali","Tamil"];

function genVolunteers(n=50){
  const now = new Date().toISOString();
  const out = [];
  for(let i=0;i<n;i++){
    const f = first[rand(first.length)];
    const l = last[rand(last.length)];
    out.push({
      id:`vol_${i+1}`,
      firstName:f, lastName:l,
      phone:`+91${Math.floor(9000000000 + Math.random()*900000000)}`,
      email:`${f.toLowerCase()}.${l.toLowerCase()}@example.com`,
      status:["available","busy","off-duty"][rand(3)],
      skills:[{name:skills[rand(skills.length)], level:["beginner","intermediate","advanced"][rand(3)]}],
      languages:[languages[rand(languages.length)]],
      location:{latitude:21.1458+Math.random()*0.1, longitude:79.0882+Math.random()*0.1, address:`Zone ${1+rand(20)}`},
      totalHoursToday:rand(8), totalHoursWeek:rand(40), fatigueScore:rand(100), createdAt:now, updatedAt:now
    });
  }
  return out;
}

function genIncidents(n=20){
  const now = new Date().toISOString();
  const types = ["medical","lost-person","crowd-control","fire","security"];
  const out = [];
  for(let i=0;i<n;i++){
    out.push({
      id:`inc_${i+1}`,
      title:`${types[rand(types.length)]} incident near Ghat ${1+rand(50)}`,
      description:"Reported by public.",
      type:types[rand(types.length)],
      priority:["low","medium","high"][rand(3)],
      status:["open","assigned","closed"][rand(3)],
      location:{latitude:21.14+Math.random()*0.1, longitude:79.08+Math.random()*0.1, address:`Ghat ${1+rand(200)}`},
      assignedVolunteerIds:[], severityScore:rand(100), reportedAt:now, createdAt:now, updatedAt:now
    })
  }
  return out;
}

function genAssignments(n=25){
  const now = new Date().toISOString();
  const out = [];
  for(let i=0;i<n;i++){
    out.push({
      id:`asn_${i+1}`,
      incidentId:`inc_${1+rand(20)}`,
      volunteerId:`vol_${1+rand(50)}`,
      assignedAt:now, status:["pending","active","completed"][rand(3)], matchScore:rand(100), matchBreakdown:{skills:rand(30),proximity:rand(30),fatigue:rand(30),availability:rand(30),language:rand(30),total:rand(100)}, fatigueImpact:rand(10), estimatedResponseMinutes:5+rand(55), createdAt:now, updatedAt:now
    })
  }
  return out;
}

const volunteers = genVolunteers(50);
const incidents = genIncidents(20);
const assignments = genAssignments(25);

if(!fs.existsSync('./data')) fs.mkdirSync('./data');
fs.writeFileSync('./data/volunteers.json', JSON.stringify(volunteers, null, 2));
fs.writeFileSync('./data/incidents.json', JSON.stringify(incidents, null, 2));
fs.writeFileSync('./data/assignments.json', JSON.stringify(assignments, null, 2));

console.log('Generated mock data: volunteers.json, incidents.json, assignments.json');
