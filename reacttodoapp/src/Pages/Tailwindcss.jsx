import React,{useState} from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Buttons from "../components/Buttons";
import { FiSave, FiMail, FiUser, FiLock,FiSettings, FiLogOut, FiChevronDown, FiBell    } from 'react-icons/fi';
import Input from "../components/Input";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Alertntoast from "../components/Alertntoast";
import Table from "../components/Table";
import Dropdown,{DropdownItem, DropdownDivider} from "../components/Dropdown";
import Tabs from "../components/Tabs";
import Badge from "../components/Badge";
import Accordion from "../components/Accordion";
import Progressbar, { CircularProgress } from "../components/Progressbar";
import Searchbar from "../components/Searchbar";
import Paginationreactcom from "../components/Paginationreactcom";
import Avatar, {AvatarGroup} from "../components/Avatar";
import Sidebardrawer from "../components/Sidebardrawer";
import Tooltip from "../components/Tooltip";
import Checkboxnradio, {Radio, Switch} from "../components/Checkboxnradio";
import Responsivenavbar from "../components/Responsivenavbar";
import Loginpg from "../components/Loginpg";

const Tailwindcss = () => {

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isRadioChecked, setIsRadioChecked] = useState(false);



 const columns = [
   { key: 'name', label: 'Name', sortable: true },
   { key: 'email', label: 'Email', sortable: true },
   { key: 'role', label: 'Role', sortable: false },
   { key: 'username', label: 'Username', sortable: true },
   { 
     key: 'status', 
     label: 'Status',
     render: (value) => (
       <span className={`px-2 py-1 rounded-full text-xs ${
         value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
       }`}>
         {value}
       </span>
     )
   }
 ];
 
 const data = [
  { name: 'Pradeep Bhosle', email: 'pradeep@example.com', role: 'Admin', username:"pradeep",status: 'active' },
  { name: 'Neha Bhosle', email: 'neha@example.com', role: 'User', username:"neha", status: 'active' },
  { name: 'Kaivalya Bhosle', email: 'kaivalya@example.com', role: 'Admin', username:"kaivalya", status: 'active' },
  { name: 'Ashwat Bhosle', email: 'ashwat@example.com', role: 'User', username:"ashwat", status: 'active' },
   { name: 'John Doe', email: 'john@example.com', role: 'Admin', username:"john", status: 'active' },
   { name: 'Jane Smith', email: 'jane@example.com', role: 'User', username:"jane", status: 'inactive' }
 ];

  const tabs = [
   {
     label: 'Profile',
     icon: <FiUser />,
     content: <div>Profile content  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero id, autem amet perspiciatis molestiae pariatur numquam voluptates. Assumenda rem nulla sed dicta vitae, omnis sunt hic distinctio fuga qui temporibus officia eius quisquam repellat, odio beatae, nesciunt illum consectetur voluptas nemo ab veritatis quos vero doloribus! Quas, dignissimos maxime perspiciatis maiores dolore impedit corrupti quam reiciendis? Iure accusantium rem maxime ab voluptatibus porro provident ullam recusandae repellat saepe tempora, corporis doloremque soluta praesentium eos exercitationem, quisquam a, facilis accusamus nostrum. Et, quibusdam similique natus magni repellendus itaque aliquam minus totam exercitationem architecto accusantium harum tempora ipsam est cumque error.</p> </div>
   },
   {
     label: 'Settings',
     icon: <FiSettings />,
     content: <div>Settings content <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero id, autem amet perspiciatis molestiae pariatur numquam voluptates. Assumenda rem nulla sed dicta vitae, omnis sunt hic distinctio fuga qui temporibus officia eius quisquam repellat, odio beatae, nesciunt illum consectetur voluptas nemo ab veritatis quos vero doloribus! Quas, dignissimos maxime perspiciatis maiores dolore impedit corrupti quam reiciendis? Iure accusantium rem maxime ab voluptatibus porro provident ullam recusandae repellat saepe tempora, corporis doloremque soluta praesentium eos exercitationem, quisquam a, facilis accusamus nostrum. Et, quibusdam similique natus magni repellendus itaque aliquam minus totam exercitationem architecto accusantium harum tempora ipsam est cumque error.</p> </div>
   },
   {
     label: 'Notifications',
     icon: <FiBell />,
     content: <div>Notifications content <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero id, autem amet perspiciatis molestiae pariatur numquam voluptates. Assumenda rem nulla sed dicta vitae, omnis sunt hic distinctio fuga qui temporibus officia eius quisquam repellat, odio beatae, nesciunt illum consectetur voluptas nemo ab veritatis quos vero doloribus! Quas, dignissimos maxime perspiciatis maiores dolore impedit corrupti quam reiciendis? Iure accusantium rem maxime ab voluptatibus porro provident ullam recusandae repellat saepe tempora, corporis doloremque soluta praesentium eos exercitationem, quisquam a, facilis accusamus nostrum. Et, quibusdam similique natus magni repellendus itaque aliquam minus totam exercitationem architecto accusantium harum tempora ipsam est cumque error.</p> </div>
   }
 ];

  const AccordionItems = [
   {
     title: 'What is React?',
     content: 'React is a JavaScript library for building user interfaces.'
   },
   {
     title: 'What is Tailwind CSS?',
     content: 'Tailwind CSS is a utility-first CSS framework.'
   },
    {
      title: 'What is an Accordion?',
      content: 'An accordion is a UI component that allows users to expand and collapse sections of content.'
    }
 ];

const suggestions = ['React', 'React Native', 'Redux', 'React Router'];
 

  return (
    <>
      <div>
        <main>
          <div className="grid grid-cols-4 gap-1 mt-1 p-1 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            <div className="bg-red-300  py-3 text- font-bold text-center">
              <h5>1</h5>
            </div>

            <div className="bg-blue-300 py-3 font-bold text-center">
              <h5>2</h5>
            </div>

            <div className="bg-green-300 py-3 font-bold text-center ">
              <h5>3</h5>
            </div>

            <div className="bg-orange-300 py-3 font-bold text-center">
              <h5>4</h5>
            </div>

            <div className="bg-teal-300 py-3 font-bold text-center">
              <h5>5</h5>
            </div>

            <div className="bg-yellow-300 py-3 font-bold text-center">
              <h5>6</h5>
            </div>

            <div className="bg-slate-300 py-3 font-bold text-center">
              <h5>7</h5>
            </div>

            <div className="bg-pink-300 py-3 font-bold text-center">
              <h5>8</h5>
            </div>

            <div className="bg-amber-300 py-3 font-bold text-center">
              <h5>9</h5>
            </div>

            <div className="bg-violet-300 py-3 font-bold text-center hover:bg-amber-500 focus:bg-red-500 active:bg-green-500 cursor-pointer">
              <h5>10</h5>
            </div>

            <div className="bg-cyan-300 py-3 font-bold text-center">
              <h5>11</h5>
            </div>

            <div className="bg-fuchsia-300 py-3 font-bold text-center">
              <h5>12</h5>
            </div>
          </div>
        </main>

        {/* Buttons  */}
        <div className="mt-5 border-t border-gray-600 container mx-auto p-5">
          <h2 className="text-lg font-bold">Button</h2>
          <h5 className="text-gray-500 text-sm">Primary Button</h5>
          <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded cursor-pointer hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800">
            Primary
          </button>
          {/* <!-- Secondary Button --> */}
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded cursor-pointer ">
            Secondary
          </button>

          {/* <!-- Outline Button --> */}
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-2 cursor-pointer border border-blue-500 hover:border-transparent rounded">
            Outline
          </button>

          {/* <!-- Rounded Button --> */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 cursor-pointer rounded-full">
            Rounded
          </button>
          <br />

          {/* Button Variants */}
          <div className="mt-5">
            <h5 className="text-gray-500 text-sm">Button Variants</h5>
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              Filled
            </button>
            <button
              className="rounded-md bg-linear-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              Gradient
            </button>
            <button
              className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              Outlined
            </button>
            <button
              className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              Text
            </button>
          </div>

          {/* Button Sizes */}
          <div className="mt-5 mb-5">
            <h5 className="text-gray-500 text-sm">Button Sizes</h5>
            <button
              className="rounded-md bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              Xsmall
            </button>
            <button
              className="rounded-md bg-slate-800 py-1.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              Small
            </button>
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer "
              type="button"
            >
              Medium
            </button>
            <button
              className="rounded-md bg-slate-800 py-2.5 px-5 border border-transparent text-center text-base text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              Large
            </button>
            <button
              className="rounded-lg bg-slate-800 py-3.5 px-6 border border-transparent text-center text-base text-white transition-all shadow hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 cursor-pointer"
              type="button"
            >
              XLarge
            </button>
          </div>

          {/* Button Colors */}
          <div className="mb-5">
            <h5 className="text-gray-500 text-sm">Button Colors</h5>
            <button
              className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Button Blue
            </button>
            <button
              className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Button Red
            </button>
            <button
              className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Button Green
            </button>
            <button
              className="rounded-md bg-amber-600 py-2 px-4 border border-transparent text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-amber-700 focus:shadow-none active:bg-amber-700 hover:bg-amber-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Button Amber
            </button>
          </div>

          {/* Button with icons  */}
          <div className="mb-5">
            <h5 className="text-gray-500 text-sm">Button With Icons</h5>
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Item
            </button>
          </div>

          {/* Button Loading  */}
          <div className="mb-5">
            <h5 className="text-gray-500 text-sm">Button Loading</h5>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed flex items-center gap-2"
              disabled
            >
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </button>
          </div>

          {/* Button Group  */}
          <div className="mb-5">
            <h5 className="text-gray-500 text-sm">Button Group</h5>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100">
                Left
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100">
                Middle
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100">
                Right
              </button>
            </div>
          </div>

            {/* Button Gradient  */}
          <div className="mb-5">
            <h5 className="text-gray-500 text-sm">Button Gradient</h5>
            <button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-200 cursor-pointer">
            Gradient Button
            </button>
          </div>

          
           
        </div>

        {/* Forms and Inputs  */}
        <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
          <h2 className="text-lg font-bold">Forms and Inputs</h2>

          {/* <!-- Basic Input --> */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
    Username
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="username"
    type="text"
    placeholder="Username"
  />
</div>

{/* <!-- Input with Icon --> */}
<div className="relative mb-4">
  <div
    className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
  >
    <svg
      className="w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  </div>
  <input
    type="text"
    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="Search..."
  />
</div>

{/* <!-- Textarea --> */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
    Message
  </label>
  <textarea
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
    id="message"
    placeholder="Enter your message..."
  ></textarea>
</div>

{/* <!-- Select Dropdown --> */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
    Country
  </label>
  <select
    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  >
    <option>Select a country</option>
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
</div>

{/* <!-- Checkbox --> */}
<div className="mb-4">
  <label className="flex items-center">
    <input
      type="checkbox"
      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <span className="ml-2 text-gray-700">Remember me</span>
  </label>
</div>

{/* <!-- Radio Buttons --> */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Choose an option
  </label>
  <div className="flex items-center mb-2">
    <input
      type="radio"
      name="option"
      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
    />
    <label className="ml-2 text-gray-700">Option 1</label>
  </div>
  <div className="flex items-center">
    <input
      type="radio"
      name="option"
      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
    />
    <label className="ml-2 text-gray-700">Option 2</label>
  </div>
</div>

{/* <!-- Toggle Switch --> */}
<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div
    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
  ></div>
  <span className="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
</label>

{/* <!-- File Upload --> */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Upload File
  </label>
  <div className="flex items-center justify-center w-full">
    <label
      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="w-8 h-8 mb-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
      </div>
      <input type="file" className="hidden" />
    </label>
  </div>
</div>

{/* <!-- Input with Validation (Error) --> */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2"> Email </label>
  <input
    type="email"
    className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    placeholder="email@example.com"
  />
  <p className="text-red-500 text-xs italic mt-1">Please enter a valid email.</p>
</div>

{/* <!-- Input with Validation (Success) --> */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2"> Email </label>
  <input
    type="email"
    className="w-full px-3 py-2 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
    placeholder="email@example.com"
  />
  <p className="text-green-500 text-xs italic mt-1">Looks good!</p>
</div>

{/* <!-- Search Bar --> */}
<div className="relative">
  <input
    type="search"
    className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
    placeholder="Search..."
  />
  <div
    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  >
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>


        </div>

        {/* CARDS */}
        <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
          <h2 className="text-lg font-bold">Cards</h2>

          {/* <!-- Basic Card --> */}
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-5">
  <img className="w-full" src="https://placehold.co/400x200" alt="Card image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
  </div>
</div>

{/* <!-- Horizontal Card --> */}
<div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mb-5">
  <img className="w-1/3 object-cover" src="https://placehold.co/300x200" alt="Card" />
  <div className="w-2/3 p-4">
    <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="flex mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</button>
    </div>
  </div>
</div>

{/* <!-- Product Card --> */}
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-shadow mb-5">
  <img className="rounded-t-lg w-full h-48 object-cover" src="https://placehold.co/400x300" alt="product" />
  <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Product Name</h5>
    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions.</p>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900">$99</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
        Add to cart
      </button>
    </div>
  </div>
</div>

{/* <!-- Profile Card --> */}
<div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden mb-5">
  <div className="h-32 bg-linear-to-r from-blue-500 to-purple-600"></div>
  <div className="relative px-6 pb-6">
    <div className="flex justify-center">
      <img className="w-32 h-32 rounded-full border-4 border-white -mt-16" src="https://placehold.co/128x128" alt="Avatar" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
      <p className="text-gray-600">Full Stack Developer</p>
      <div className="flex justify-center mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Follow</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300">Message</button>
      </div>
    </div>
  </div>
</div>

{/* <!-- Stat Card --> */}
<div className="bg-white rounded-lg shadow p-6 mb-5 border border-gray-200">
  <div className="flex items-center">
    <div className="shrink-0 bg-blue-500 rounded-md p-3">
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    </div>
    <div className="ml-5 w-0 flex-1">
      <dl>
        <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
        <dd className="flex items-baseline">
          <div className="text-2xl font-semibold text-gray-900">71,897</div>
          <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
            <svg className="self-center shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
            <span>12%</span>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</div>

{/* <!-- Blog Card with Overlay --> */}
<div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg group mb-5">
  <img className="w-full h-64 object-cover" src="https://placehold.co/400x300" alt="Blog" />
  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">Read More</button>
  </div>
  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-6">
    <h3 className="text-white text-xl font-bold">Blog Post Title</h3>
    <p className="text-gray-300 text-sm mt-2">Posted on Jan 15, 2024</p>
  </div>
</div>

        </div>

        {/* NAVIGATION */}

        <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
          <h2 className="text-lg font-bold">Navigation</h2>

          {/* <!-- Simple Navbar --> */}
<nav className="bg-gray-800 mb-5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-white font-bold text-xl">Logo</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

{/* <!-- Navbar with Dropdown --> */}
<nav className="bg-white shadow-lg mb-5">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-7">
        <div>
          <a href="#" className="flex items-center py-4 px-2">
            <span className="font-semibold text-gray-500 text-lg">Brand</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</a>
          <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Services</a>
          
          {/* <!-- Dropdown --> */}
          <div className="relative group">
            <button className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 flex items-center">
              Products
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 1</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 2</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 3</a>
            </div>
          </div>
          
          <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-3">
        <a href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</a>
        <a href="#" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</a>
      </div>
      {/* <!-- Mobile menu button --> */}
      <div className="md:hidden flex items-center">
        <button className="outline-none mobile-menu-button">
          <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  {/* <!-- mobile menu --> */}
  <div className="hidden mobile-menu">
    <ul className="">
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Home</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Services</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">About</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Contact</a></li>
    </ul>
  </div>
</nav>

{/* <!-- Sidebar Navigation --> */}
<div className="flex h-screen mb-5">
  <aside className="w-64 bg-gray-800">
    <div className="p-4">
      <h1 className="text-white text-2xl font-bold">Dashboard</h1>
    </div>
    <nav className="mt-4">
      <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        Home
      </a>
      <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        Profile
      </a>
      <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        Settings
      </a>
    </nav>
  </aside>
  <main className="flex-1 bg-gray-100 p-8">
    {/* <!-- Main content here --> */}
  </main>
</div>

{/* <!-- Breadcrumb Navigation --> */}
<nav className="flex px-5 py-3 text-gray-700 bg-gray-50 rounded-lg border border-gray-200" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Current Page</span>
      </div>
    </li>
  </ol>
</nav>

        </div>

        {/* Table */}
        <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
          <h2 className="text-lg font-bold">Table</h2>

            {/* <!-- Basic Table --> */}
<div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200 mb-5">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">User</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

{/* <!-- Table with Actions --> */}
<div className="overflow-x-auto shadow-md rounded-lg mb-5">
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src="https://placehold.co/40" alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Product Name</div>
              <div className="text-sm text-gray-500">Category</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$99.00</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
          <button className="text-red-600 hover:text-red-900">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

{/* <!-- Striped Table --> */}
<table className="min-w-full">
  <thead className="bg-gray-800 text-white">
    <tr>
      <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-white">
      <td className="px-6 py-4">1</td>
      <td className="px-6 py-4">Item 1</td>
      <td className="px-6 py-4">Active</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="px-6 py-4">2</td>
      <td className="px-6 py-4">Item 2</td>
      <td className="px-6 py-4">Pending</td>
    </tr>
    <tr className="bg-white">
      <td className="px-6 py-4">3</td>
      <td className="px-6 py-4">Item 3</td>
      <td className="px-6 py-4">Inactive</td>
    </tr>
  </tbody>
</table>

          </div>

        {/* BADGES & TAGS */}
        <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
          <h2 className="text-lg font-bold">Badges & Tags</h2>

          {/* <!-- Basic Badge --> */}
<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Default</span>
<span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Dark</span>
<span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Red</span>
<span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Green</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Yellow</span>

{/* <!-- Pill Badge --> */}
<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Default</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Purple</span>

{/* <!-- Badge with Dot --> */}
<span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
  Active
</span>

{/* <!-- Badge with Icon --> */}
<span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
  </svg>
  Error
</span>

{/* <!-- Notification Badge --> */}
<button className="relative inline-flex items-center p-3 text-sm font-medium text-center mr-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
  </svg>
  <span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">20</div>
</button>

{/* <!-- Removable Tag --> */}
<span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
  JavaScript
  <button className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900">
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
    </svg>
  </button>
</span>

          </div>

        {/* ALERTS & NOTIFICATIONS */}
        <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
          <h2 className="text-lg font-bold">Alerts & Notifications</h2>

            {/* <!-- Success Alert --> */}
<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong className="font-bold">Success!</strong>
  <span className="block sm:inline">Your changes have been saved.</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
    </svg>
  </span>
</div>

{/* <!-- Error Alert --> */}
<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong className="font-bold">Error!</strong>
  <span className="block sm:inline">Something went wrong.</span>
</div>

{/* <!-- Warning Alert --> */}
<div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong className="font-bold">Warning!</strong>
  <span className="block sm:inline">Please check your input.</span>
</div>

{/* <!-- Info Alert --> */}
<div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong className="font-bold">Info!</strong>
  <span className="block sm:inline">New updates are available.</span>
</div>

{/* <!-- Alert with Icon --> */}
<div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 rounded mb-5" role="alert">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
  </svg>
  <p>Something happened that you should know about.</p>
</div>

{/* <!-- Toast Notification (Top Right) --> */}
<div className="fixed top-5 right-5 bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden max-w-sm w-full mb-5">
  <div className="p-4">
    <div className="flex items-start">
      <div className="shrink-0">
        <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div className="ml-3 w-0 flex-1 pt-0.5">
        <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
        <p className="mt-1 text-sm text-gray-500">Your changes have been saved to the database.</p>
      </div>
      <div className="ml-4 flex-shrink-0 flex">
        <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

            </div>

        {/* DROPDOWNS */}
        <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
            <h2 className="text-lg font-bold">BREADCRUMBS</h2>

            {/* <!-- Simple Breadcrumb --> */}
<nav className="flex" aria-label="Breadcrumb" className="mb-5">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="text-gray-700 hover:text-blue-600">
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <span className="mx-2 text-gray-400">/</span>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-500">Current Page</span>
      </div>
    </li>
  </ol>
</nav>

{/* <!-- Breadcrumb with Icons --> */}
<nav className="flex px-5 py-3 text-gray-700 bg-gray-50 rounded-lg border border-gray-200">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Flowbite</span>
      </div>
    </li>
  </ol>
</nav>

          </div>

          {/* PAGINATION */}
          <div className="mb-5 border-t border-gray-600 container mx-auto p-5">
            <h2 className="text-lg font-bold">PAGINATION</h2>

            {/* <!-- Basic Pagination --> */}
<nav className="flex justify-center mb-5">
  <ul className="inline-flex -space-x-px">
    <li>
      <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
        Previous
      </a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">2</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
        Next
      </a>
    </li>
  </ul>
</nav>

{/* <!-- Pagination with Icons --> */}
<nav className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div className="flex flex-1 justify-between sm:hidden">
    <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
    <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
      </p>
    </div>
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">1</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 bg-blue-50 hover:bg-gray-50">2</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">3</a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300">...</span>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">8</a>
        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</nav>

            </div>


<div>


        <hr className="border-gray-600 mb-5" />
        <h2 className="text-3xl font-bold text-center">React Components </h2>
        <div className="mt-5 mb-5 rounded shadow-sm border border-gray-300 shadow-gray-500 container p-5 mx-auto">
          <div className="flex flex-wrap gap-5 justify-center">
          <Buttons variant="primary" size="md" icon={<FiSave />}>Save</Buttons>
          <Buttons variant="outline" loading={true}>Loading...</Buttons>

          </div>
          <hr />
          <div className="flex flex-wrap gap-5 justify-center mt-5">
            <Input 
              label="Username" 
              type="text" 
              icon={<FiUser className="text-gray-400" />}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError}
            />
            <Input 
                label="Email" 
                type="email" 
                icon={<FiMail className="text-gray-400" />}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
            <Input 
                label="Password" 
                type="password" 
                icon={<FiLock className="text-gray-400" />}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
              />
            </div>
        <hr />
            <div className="flex flex-wrap gap-5 justify-center mt-5">
             <Card title="Card Title" subtitle="Card subtitle" image="https://placehold.co/600x400" >
              <p>Card content goes here</p>
             </Card>

             <Card title="Card Title" subtitle="Card subtitle" image="https://placehold.co/600x400" >
              <p>Card content goes here</p>
             </Card>

             <Card title="Card Title" subtitle="Card subtitle" image="https://placehold.co/600x400" >
              <p>Card content goes here</p>
             </Card>
            </div>

            <hr />

            <div className="flex flex-wrap gap-5 justify-center mt-5">
              <Buttons variant="primary" onClick={() => setIsOpen(true)}>Open Modal</Buttons>
 <Modal
  isOpen={isOpen}
   onClose={() => setIsOpen(false)}
   title="Modal Title"
   footer={
     <>
       <Buttons variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Buttons>
       <Buttons variant="primary">Save Changes</Buttons>
     </>
   }
 >
   <p>Modal content goes here</p>
 </Modal>
            </div>
            <hr />

              <div className="flex flex-wrap gap-5 justify-center mt-5">
                <Alertntoast 
                  type="success" 
                  title="Success!" 
                  message="Your changes have been saved." 
                  onClose={() => {}}
                  />

                  <Alertntoast 
                  type="error" 
                  title="Error!" 
                  message="An error occurred while saving your changes." 
                  onClose={() => {}}
                  />

                  <Alertntoast 
                  type="warning" 
                  title="Warning!"
                  message="Please check your input and try again."
                  onClose={() => {}}
                  />

                  <Alertntoast 
                  type="info" 
                  title="Info!" 
                  message="New updates are available." 
                  onClose={() => {}}
                  />


              </div>

              <hr />

              <div className="flex flex-wrap gap-5 justify-center mt-5">
                 <Table columns={columns} data={data} onRowClick={(row) => console.log(row)} />
              </div>

              <hr />

              <div className="flex flex-wrap gap-5 justify-center mt-5">
                 <Dropdown 
   trigger={
     <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
       Menu <FiChevronDown />
     </button>
   }
 >
   <DropdownItem icon={<FiUser />} onClick={() => {}}>Profile</DropdownItem>
   <DropdownItem icon={<FiSettings />} onClick={() => {}}>Settings</DropdownItem>
   <DropdownDivider />
   <DropdownItem icon={<FiLogOut />} onClick={() => {}} danger>Logout</DropdownItem>
 </Dropdown>
                </div>

                <hr />

              <div className="flex flex-wrap gap-5 justify-center mt-5">
                <Tabs tabs={tabs} />
                </div>
                <hr />

              <div className="flex flex-wrap gap-5 justify-center mt-5">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary" removable onRemove={() => {}}>React</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>  
              </div>

              <hr />
              <div className="flex flex-wrap gap-5 justify-center mt-5">
                <Accordion items={AccordionItems} allowMultiple={false}  />
                </div>
              <hr />
              <div className="flex flex-wrap gap-5 justify-center mt-5">
                <Progressbar value={75} showLabel={true} color="green" />
                <CircularProgress  value={65} size={150}  />
                </div>
              <hr />
                <div className="flex flex-wrap gap-5 justify-center mt-5">
                  <Searchbar 
                    onSearch={(query) => console.log(query)} 
                    suggestions={suggestions}
                  />
                  </div>

                  <hr />
                  <div className="flex flex-wrap gap-5 justify-center mt-5">
                    <Paginationreactcom
                        currentPage={currentPage} 
                        totalPages={10} 
                        onPageChange={setCurrentPage}
                    />
                    </div>

                    <hr />
                      <div className="flex flex-wrap gap-5 justify-center mt-5">
                        <Avatar src="https://placehold.co/100" alt="User Avatar" size="lg" status="online"  />

                         <Avatar initials="JD" size="md" />
                         <AvatarGroup avatars={[
                           { src: 'https://placehold.co/100', alt: 'User 1' },
                           { src: 'https://placehold.co/100', alt: 'User 2' },
                           { initials: 'AB', alt: 'User 3' }
                         ]} max={2} />

                        </div>
                    <hr />
                    <div className="flex flex-wrap gap-5 justify-center mt-5">
                      <h4 className="text-xl font-bold">Sidebar Drawer</h4>
                      <Buttons variant="primary" onClick={() => setIsSidebarOpen(true)}>Open Sidebar</Buttons>  
                      <Sidebardrawer 
                      isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
  <nav className="space-y-2">
    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Home</a>
    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">About</a>
    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Services</a>
  </nav>
</Sidebardrawer>
                      </div>

                      <hr />
                      <div className="flex flex-wrap gap-5 justify-center mt-5">
                        <Tooltip content="This is a tooltip" position="top">
   <button className="px-4 py-2 bg-blue-600 text-white rounded">
     Hover me
   </button>
 </Tooltip>
                        </div>

                        <hr />
                      <div className="flex flex-wrap gap-5 justify-center mt-5">
                        <Checkboxnradio 
                          label="Accept terms and conditions" 
                          checked={isCheckboxChecked} 
                          onChange={(checked) => setIsCheckboxChecked(checked)} 
                        />
                        <Radio 
                          label="Option 1" 
                          name="radio-group" 
                          checked={isRadioChecked} 
                          onChange={() => setIsRadioChecked(true)} 
                        />
                        <Radio 
                          label="Option 2" 
                          name="radio-group" 
                          checked={!isRadioChecked} 
                          onChange={() => setIsRadioChecked(false)} 
                        />
                        <Switch 
                          checked={isSwitchOn} 
                          onChange={(checked) => setIsSwitchOn(checked)} 
                          label="Enable feature"
                        />  
                      </div>
                      <hr />
                        <div className="flex flex-wrap gap-5 justify-center mt-5">
                          <Responsivenavbar />
                          </div>

                      <hr />
                        <div className="flex flex-wrap gap-5 justify-center mt-5">
                          <Loginpg />
                          </div>

                    </div>


</div>


      </div>
    </>
  );
};

export default Tailwindcss;
