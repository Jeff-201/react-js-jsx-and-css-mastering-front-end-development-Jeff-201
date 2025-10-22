import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'User Directory',
      description: 'Browse and search through user information.',
      icon: '👥',
      path: '/users'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '🌙',
      path: '/tasks'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">TaskMaster</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          A modern React application demonstrating component architecture, state management, 
          and API integration with a beautiful, responsive design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="outline" size="lg">
              Browse Users
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            <Link to={feature.path}>
              <Button variant="outline" size="sm">
                Explore
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <Card className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Built with Modern Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Tailwind CSS', 'React Router', 'Context API'].map((tech) => (
            <div key={tech}>
              <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                {tech}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Home;