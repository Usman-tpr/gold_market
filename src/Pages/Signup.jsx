import { useState } from 'react';
import { postRequest } from '../Requests/Request';
import Notification from '../Components/Notification';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    phone: '',
    location: ''
  });
  const [notification, setNotification] = useState({ show: false, message: '' });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await postRequest("/user", formData)
      console.log(response.success)
      if (response.success) {
        setNotification({ show: true, message: 'Signup successful!' });
      } else {
        setNotification({ show: true, message: 'Signup failed. Please try again.' });
      }

      localStorage.setItem("g_token", response.token)
    } catch (error) {

    }

  };
  const districts = [
    "Awaran", "Barkhan", "Chaghi", "Chaman", "Dera Bugti", "Duki", "Gwadar", "Harnai", "Hub",
    "Jaffarabad", "Jhal Magsi", "Kachhi", "Kalat", "Kech", "Kharan", "Khuzdar", "Kohlu",
    "Lasbela", "Loralai", "Mastung", "Musakhel", "Nasirabad", "Nushki", "Panjgur",
    "Pishin", "Quetta", "Killa Abdullah", "Killa Saifullah", "Sherani", "Sibi",
    "Sohbatpur", "Surab", "Washuk", "Zhob", "Ziarat", "Abbottabad", "Bajaur Agency",
    "Bannu", "Batagram", "Buner", "Charsadda", "Dera Ismail Khan", "Hangu",
    "Haripur", "Karak", "Khyber Agency", "Kohat", "Kurram Agency", "Kolai Palas",
    "Lakki Marwat", "Lower Dir", "Lower Kohistan", "Lower Chitral", "Malakand",
    "Mansehra", "Mardan", "Mohmand Agency", "North Waziristan Agency",
    "Nowshera", "Orakzai Agency", "Peshawar", "Shangla", "South Waziristan Agency",
    "Swabi", "Swat", "Tank", "Tor Ghar", "Upper Dir", "Upper Kohistan",
    "Upper Chitral", "Badin", "Dadu", "Ghotki", "Hyderabad", "Jacobabad",
    "Jamshoro", "Karachi Central", "Karachi East", "Karachi South",
    "Karachi West", "Kashmore", "Khairpur", "Korangi", "Keamari",
    "Larkana", "Malir", "Matiari", "Mirpurkhas", "Naushehro Feroze",
    "Kambar-Shahdadkot", "Sanghar", "Shaheed Benazirabad", "Shikarpur",
    "Sajawal", "Sukkur", "Tando Allahyar", "Tando Muhammad Khan",
    "Tharparkar", "Thatta", "Umerkot", "Attock", "Bahawalnagar", "Bahawalpur",
    "Bhakkar", "Chakwal", "Chiniot", "Dera Ghazi Khan", "Faisalabad",
    "Gujranwala", "Gujrat", "Hafizabad", "Jhang", "Jhelum", "Kasur",
    "Khanewal", "Khushab", "Lahore", "Layyah", "Lodhran", "Mandi Bahauddin",
    "Mianwali", "Multan", "Muzaffargarh", "Narowal", "Nankana Sahib",
    "Okara", "Pakpattan", "Rahim Yar Khan", "Rajanpur", "Rawalpindi",
    "Sahiwal", "Sargodha", "Sheikhupura", "Sialkot", "Toba Tek Singh",
    "Vehari", "Muzaffarabad", "Hattian", "Neelum", "Mirpur", "Bhimber",
    "Kotli", "Poonch", "Bagh", "Haveli", "Sudhnutti", "Ghanchi",
    "Skardu", "Astor", "Diamir", "Ghizer", "Gilgit", "Hunza", "Kharmang",
    "Shigar", "Nagar", "Gupis-Yasin", "Tangir", "Darel", "Roundu"
  ];


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select District</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <Notification
        show={notification.show}
        message={notification.message}
        onClose={() => setNotification({ show: false, message: '' })}
      />
    </>
  );
};

export default Signup;
