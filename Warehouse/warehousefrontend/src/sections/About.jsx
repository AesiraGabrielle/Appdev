import React from 'react';
import { Card } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../assets/sidenavs/Navbar';
import Sidebar from '../assets/sidenavs/Sidebar';

const About = () => {
  return (
    <div>
      <Sidebar />
      <h3 style={{ paddingTop: '100px', marginLeft: '350px' }}>About</h3>
      <Card style={{ width: '79%', height: 'auto', marginLeft: '350px',marginTop:'20px', border: '2px solid black' }}>
        <Card.Body style={{ textAlign: 'justify', marginTop:'20px' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim felis sed ex ullamcorper, vel tincidunt nisl ultrices. Nulla facilisi. Sed vel tellus ut lorem pharetra tristique. Duis auctor posuere odio nec ultricies. Integer quis consequat lorem. Mauris auctor, felis eget fermentum malesuada, arcu elit efficitur sem, a rhoncus nulla tellus sed ligula. Aliquam erat volutpat. Donec dictum nisi vel ipsum fermentum, ac dapibus ipsum vehicula. Nam pellentesque justo magna, id venenatis magna accumsan ac. Mauris efficitur laoreet fringilla. Cras eget orci velit. Quisque a est ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim felis sed ex ullamcorper, vel tincidunt nisl ultrices. Nulla facilisi. Sed vel tellus ut lorem pharetra tristique. Duis auctor posuere odio nec ultricies. Integer quis consequat lorem. Mauris auctor, felis eget fermentum malesuada, arcu elit efficitur sem, a rhoncus nulla tellus sed ligula. Aliquam erat volutpat. Donec dictum nisi vel ipsum fermentum, ac dapibus ipsum vehicula. Nam pellentesque justo magna, id venenatis magna accumsan ac. Mauris efficitur laoreet fringilla. Cras eget orci velit. Quisque a est ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim felis sed ex ullamcorper, vel tincidunt nisl ultrices. Nulla facilisi. Sed vel tellus ut lorem pharetra tristique. Duis auctor posuere odio nec ultricies. Integer quis consequat lorem. Mauris auctor, felis eget fermentum malesuada, arcu elit efficitur sem, a rhoncus nulla tellus sed ligula. Aliquam erat volutpat. Donec dictum nisi vel ipsum fermentum, ac dapibus ipsum vehicula. Nam pellentesque justo magna, id venenatis magna accumsan ac. Mauris efficitur laoreet fringilla. Cras eget orci velit. Quisque a est ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim felis sed ex ullamcorper, vel tincidunt nisl ultrices. Nulla facilisi. Sed vel tellus ut lorem pharetra tristique. Duis auctor posuere odio nec ultricies. Integer quis consequat lorem. Mauris auctor, felis eget fermentum malesuada, arcu elit efficitur sem, a rhoncus nulla tellus sed ligula. Aliquam erat volutpat. Donec dictum nisi vel ipsum fermentum, ac dapibus ipsum vehicula. Nam pellentesque justo magna, id venenatis magna accumsan ac. Mauris efficitur laoreet fringilla. Cras eget orci velit. Quisque a est ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim felis sed ex ullamcorper, vel tincidunt nisl ultrices. Nulla facilisi. Sed vel tellus ut lorem pharetra tristique. Duis auctor posuere odio nec ultricies. Integer quis consequat lorem. Mauris auctor, felis eget fermentum malesuada, arcu elit efficitur sem, a rhoncus nulla tellus sed ligula. Aliquam erat volutpat. Donec dictum nisi vel ipsum fermentum, ac dapibus ipsum vehicula. Nam pellentesque justo magna, id venenatis magna accumsan ac. Mauris efficitur laoreet fringilla. Cras eget orci velit. Quisque a est ipsum.
          </p>
        </Card.Body>
      </Card>
      <Navbar />
    </div>
  );
};

export default About;
