import React, { useState } from 'react';

const SettingsPage = () => {
  const [accountInfo, setAccountInfo] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [privacy, setPrivacy] = useState({
    showProfilePicture: true,
    shareActivityStatus: false,
  });

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Credit Card', lastFourDigits: '1234' },
    { id: 2, type: 'PayPal', email: 'paypal@example.com' },
  ]);

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
  });

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handlePrivacyChange = (e) => {
    const { name, checked } = e.target;
    setPrivacy({ ...privacy, [name]: checked });
  };

  const handleSecurityChange = (e) => {
    const { name, checked } = e.target;
    setSecurity({ ...security, [name]: checked });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">Settings</h2>

      {/* Account Settings Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={accountInfo.username}
              onChange={handleAccountChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={accountInfo.email}
              onChange={handleAccountChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={accountInfo.phone}
              onChange={handleAccountChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Notification Preferences</h3>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="emailNotifications"
            name="emailNotifications"
            checked={notifications.emailNotifications}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          <label htmlFor="emailNotifications" className="font-medium">Email Notifications</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="smsNotifications"
            name="smsNotifications"
            checked={notifications.smsNotifications}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          <label htmlFor="smsNotifications" className="font-medium">SMS Notifications</label>
        </div>
      </div>

      {/* Privacy Settings Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Privacy Settings</h3>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showProfilePicture"
            name="showProfilePicture"
            checked={privacy.showProfilePicture}
            onChange={handlePrivacyChange}
            className="mr-2"
          />
          <label htmlFor="showProfilePicture" className="font-medium">Show Profile Picture</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="shareActivityStatus"
            name="shareActivityStatus"
            checked={privacy.shareActivityStatus}
            onChange={handlePrivacyChange}
            className="mr-2"
          />
          <label htmlFor="shareActivityStatus" className="font-medium">Share Activity Status</label>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Payment Methods</h3>
        {paymentMethods.map((method) => (
          <div key={method.id} className="mb-4 border p-4 rounded-md">
            <p className="font-medium">Payment Method: {method.type}</p>
            {method.type === 'Credit Card' && (
              <p>Card ending in: **** **** **** {method.lastFourDigits}</p>
            )}
            {method.type === 'PayPal' && (
              <p>PayPal Email: {method.email}</p>
            )}
            <button
              className="mt-2 text-red-600 hover:text-red-800 underline"
            >
              Remove Payment Method
            </button>
          </div>
        ))}
        <button className="mt-4 bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600">
          Add Payment Method
        </button>
      </div>

      {/* Security Options Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Security</h3>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="twoFactorAuth"
            name="twoFactorAuth"
            checked={security.twoFactorAuth}
            onChange={handleSecurityChange}
            className="mr-2"
          />
          <label htmlFor="twoFactorAuth" className="font-medium">Enable Two-Factor Authentication (2FA)</label>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="text-center">
        <button className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-10 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
