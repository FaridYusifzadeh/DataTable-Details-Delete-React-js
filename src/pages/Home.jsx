import React, { useState, useEffect } from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
// styles
import "../assets/pages/home.scss";
import { Link } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        console.log("this is catch");
      });
  }, []);
  return (
    <div className="home">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Data Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td data-column="First Name">{item.id}</td>
                <td data-column="Last Name">{item.title.slice(0, 12)}...</td>
                <td data-column="Job Title">
                  {item.description.slice(0, 16)}...
                </td>
                <td data-column="Twitter">{item.price}$</td>
                <td data-column="Twitter">
                  <Link to={`/details/${item.id}`}>
                    <VisibilityIcon />
                  </Link>
                  <Link to={`/deletedata/${item.id}`}>
                    <DeleteIcon className="delete" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
