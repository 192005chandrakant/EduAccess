"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Moon, Bell, Globe, Mail, Lock, BookOpen, Clock } from "lucide-react"

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [language, setLanguage] = useState("en")
  const [timezone, setTimezone] = useState("UTC")
  const [account, setAccount] = useState({
    email: "user@example.com",
    password: ""
  })
  const [coursePreferences, setCoursePreferences] = useState({
    assignments: true,
    announcements: true,
    grades: true
  })

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [darkMode])

  // Notification permissions
  useEffect(() => {
    if (notifications && Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Notifications Enabled", {
            body: "You'll now receive important updates!"
          })
        }
      })
    }
  }, [notifications])

  // Handle account changes
  const handleAccountChange = (field: string, value: string) => {
    setAccount(prev => ({ ...prev, [field]: value }))
  }

  // Handle course preferences
  const handleCoursePreference = (pref: string) => {
    setCoursePreferences(prev => ({
      ...prev,
      [pref]: !prev[pref as keyof typeof prev]
    }))
  }

  return (
    <div className="max-w-2xl mx-auto p-4 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Settings</h1>
      <div className="space-y-6">
        {/* Account Settings */}
        <SettingItem
          icon={<Mail size={24} />}
          title="Account"
          description="Update your email and password"
        >
          <div className="space-y-4">
            <input
              type="email"
              value={account.email}
              onChange={(e) => handleAccountChange('email', e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
              placeholder="Email"
            />
            <input
              type="password"
              value={account.password}
              onChange={(e) => handleAccountChange('password', e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
              placeholder="New Password"
            />
          </div>
        </SettingItem>

        {/* Dark Mode */}
        <SettingItem
          icon={<Moon size={24} />}
          title="Dark Mode"
          description="Enable dark mode for better night viewing"
        >
          <Toggle checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </SettingItem>

        {/* Notifications */}
        <SettingItem
          icon={<Bell size={24} />}
          title="Notifications"
          description="Manage your notification preferences"
        >
          <Toggle checked={notifications} onChange={() => setNotifications(!notifications)} />
        </SettingItem>

        {/* Course Preferences */}
        <SettingItem
          icon={<BookOpen size={24} />}
          title="Course Preferences"
          description="Customize your course notifications"
        >
          <div className="space-y-2">
            {Object.entries(coursePreferences).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleCoursePreference(key)}
                  className="form-checkbox h-4 w-4 text-indigo-500"
                />
                <span className="text-gray-700 dark:text-white capitalize">{key}</span>
              </label>
            ))}
          </div>
        </SettingItem>

        {/* Language */}
        <SettingItem
          icon={<Globe size={24} />}
          title="Language"
          description="Select your preferred language"
        >
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value)
              localStorage.setItem('lang', e.target.value)
            }}
            className="border rounded-md p-2 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </SettingItem>

        {/* Timezone */}
        <SettingItem
          icon={<Clock size={24} />}
          title="Timezone"
          description="Set your local timezone"
        >
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="border rounded-md p-2 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time (EST)</option>
            <option value="PST">Pacific Time (PST)</option>
            <option value="CET">Central European Time (CET)</option>
          </select>
        </SettingItem>
      </div>
    </div>
  )
}

// Rest of the components (SettingItem and Toggle) remain the same as in original question

const SettingItem: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
}> = ({ icon, title, description, children }) => (
  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <div className="flex items-center space-x-4">
      <div className="text-indigo-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
    {children}
  </div>
)

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <label className="flex items-center cursor-pointer">
    <div className="relative">
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <div
        className={`block w-14 h-8 rounded-full transition-colors ${checked ? "bg-indigo-500" : "bg-gray-300"}`}
      ></div>
      <div
        className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${checked ? "transform translate-x-6" : ""}`}
      ></div>
    </div>
  </label>
)

export default Settings