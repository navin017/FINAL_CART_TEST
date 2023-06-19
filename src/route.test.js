// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';


// describe("Testing the Router",function() {
// test('renders login page by default', () => {
//   render(
//     <MemoryRouter initialEntries={['/login']}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(screen.getByTestId('login-page')).toBeInTheDocument();
// });

// // test('renders header when user is logged in', () => {
// //   render(
// //     <MemoryRouter initialEntries={['/user']}>
// //       <App />
// //     </MemoryRouter>
// //   );

// //   const headerElement = screen.getByTestId('header');
// //   expect(headerElement).toBeInTheDocument();
// // });

// // test('redirects to login page when user is not logged in', () => {
// //   render(
// //     <MemoryRouter initialEntries={['/user']}>
// //       <App />
// //     </MemoryRouter>
// //   );

// //   const loginPageElement = screen.getByTestId('login-page');
// //   expect(loginPageElement).toBeInTheDocument();
// // });
// })