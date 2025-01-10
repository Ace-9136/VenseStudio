import React from 'react';

const students = [
  { id: 1, name: "Saurabh Zore", instaId: "saurabh_zore.arts", photoUrl: "/images/Saurabh.jpg" },
  { id: 2, name: "Siddhant Gaikwad", instaId: "siddhanntg", photoUrl: "/images/Siddhant.jpg" },
  { id: 3, name: "Shubham Betkar", instaId: "__pencil2pixels__", photoUrl: "/images/Shubham.jpg" },
  { id: 4, name: "Gaurav sakpal", instaId: "gaurav_sakpal_11", photoUrl: "/images/Gaurab.jpg" },
  { id: 5, name: "Anurag Patil", instaId: "artistic_anurag_03", photoUrl: "/images/Anu.jpg" },
  { id: 6, name: "Sahil Ansari", instaId: "schizomenta", photoUrl: "/images/Sahil.jpg" },
  { id: 7, name: "Dinesh Buddhana", instaId: "imagination_creator_29", photoUrl: "/images/Dinesh.jpg" },
];

function StudentShowcase() {
  return (
    <section id="students" className="student-showcase">
      <div className="container">
        <h2>Meet Our Artists</h2>
        <div className="student-grid">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <img src={student.photoUrl} alt={student.name} />
              <h3>{student.name}</h3>
              <a href={`https://instagram.com/${student.instaId}`} target="_blank" rel="noopener noreferrer" className="insta-link">
                @{student.instaId}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentShowcase;

