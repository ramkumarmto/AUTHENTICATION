import React from "react";
import "./courses.css";
import Button from "../reusable/Button";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    courseName: "Complete React Cource",
    auther : "Ram Kumar",
    rating: "4.2",
    price: 299,
    discription: "path from absolute beginner to champion",
    image:
      "https://wpapi.nurelm.com/wp-content/uploads/2019/05/featured-hand-react-1800x1040.jpg",
  },
  {
    id: 2,
    courseName: "Next.Js, From beginning",
    auther : "Ram Kumar",
    price: 299,
    rating: "4.9",
    discription: "Make modern web app using next js",
    image:
      "https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png",
  },
  {
    id: 3,
    courseName: "JS, The Mastery Course",
    auther : "Ram Kumar",
    price: 299,
    rating: "4.4",
    discription: "Learn the most popular Language for web and native mobile application",
    image:
      "https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png",
  },
  {
    id: 4,
    courseName: "Lean Node Js",
    auther : "Ram Kumar",
    price: 299,
    rating: "4.1",
    discription: "path of starting backend technology with javascript",
    image:
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
  },
  {
    id: 5,
    courseName: "MERN with 2 Projects",
    auther : "Ram Kumar",
    price: 299,
    rating: "5.0",
    discription: "Make full stack web app using MERN technologies",
    image:
      "https://miro.medium.com/v2/resize:fit:550/1*dqvlaszRLvoPmARpOlLN9A.png",
  },
];

function AllCources() {
  return (
    <div className="courses-container">
        {
            courses?.map((course)=> (
                <div className="course-card" key={course.id}>
                <img
                  src={course.image}
                  alt=""
                  width="220"
                  height="170"
                />
                <div className="card-details">
                <div
              style={{
                width: "95%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h6>{course.courseName}</h6>
              <h6>${course.price}</h6>
            </div>
                  <p>Auther : {course.auther}</p>
                  <p>Rating : {course.rating}</p>
                  <p className="cookieDescription">
                   {course.discription}
                  </p>
                  <Link to="" ><Button className="payment-btn" btnName="Know More">
            </Button></Link>
                </div>
              </div>
            ))
        }
     
    </div>
  );
}

export default AllCources;
