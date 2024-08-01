// import React from 'react';

// export const Filter = ({
//   users,
//   selectedUser,
//   setSelectedUser,
//   searchQuery,
//   setSearchQuery,
//   categories,
//   selectedCategories,
//   handleCategoryClick,
//   handleResetFilters,
//   setSelectedCategories,
// }) => {
//   return (
//     <nav className="panel">
//       <p className="panel-heading">Filters</p>

//       <p className="panel-tabs has-text-weight-bold">
//         <a
//           data-cy="FilterAllUsers"
//           href="#/"
//           onClick={() => setSelectedUser(null)}
//           className={!selectedUser ? 'is-active' : ''}
//         >
//           All
//         </a>
//         {users.map(user => (
//           <a
//             key={user.id}
//             data-cy="FilterUser"
//             href="#/"
//             onClick={() => setSelectedUser(user.id)}
//             className={selectedUser === user.id ? 'is-active' : ''}
//           >
//             {user.name}
//           </a>
//         ))}
//       </p>

//       <div className="panel-block">
//         <p className="control has-icons-left has-icons-right">
//           <input
//             data-cy="SearchField"
//             type="text"
//             className="input"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={e => setSearchQuery(e.target.value)}
//           />
//           <span className="icon is-left">
//             <i className="fas fa-search" aria-hidden="true" />
//           </span>
//           {searchQuery && (
//             <span className="icon is-right">
//               <button
//                 data-cy="ClearButton"
//                 type="button"
//                 className="delete"
//                 onClick={() => setSearchQuery('')}
//               />
//             </span>
//           )}
//         </p>
//       </div>

//       <div className="panel-block is-flex-wrap-wrap">
//         <a
//           href="#/"
//           data-cy="AllCategories"
//           className={`button is-success mr-6 ${selectedCategories.length === 0 ? '' : 'is-outlined'}`}
//           onClick={() => setSelectedCategories([])}
//         >
//           All
//         </a>
//         {categories.map(category => (
//           <a
//             key={category.id}
//             data-cy="Category"
//             className={`button mr-2 my-1 ${selectedCategories.includes(category.id) ? 'is-info' : ''}`}
//             href="#/"
//             onClick={() => handleCategoryClick(category.id)}
//           >
//             {category.icon} {category.title}
//           </a>
//         ))}
//       </div>

//       <div className="panel-block">
//         <a
//           data-cy="ResetAllButton"
//           href="#/"
//           className="button is-link is-outlined is-fullwidth"
//           onClick={handleResetFilters}
//         >
//           Reset all filters
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Filter;
