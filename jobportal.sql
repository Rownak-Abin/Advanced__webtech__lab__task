-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2020 at 12:36 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobportal`
--

-- --------------------------------------------------------

--
-- Table structure for table `joblist`
--

CREATE TABLE `joblist` (
  `id` int(50) NOT NULL,
  `cName` varchar(500) NOT NULL,
  `title` varchar(500) NOT NULL,
  `location` varchar(500) NOT NULL,
  `salary` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `joblist`
--

INSERT INTO `joblist` (`id`, `cName`, `title`, `location`, `salary`) VALUES
(1, 'siam', 'Lecturer', 'AIUB', '60000');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `eName` varchar(500) NOT NULL,
  `cName` varchar(500) NOT NULL,
  `cNo` varchar(500) NOT NULL,
  `uname` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `picture` varchar(500) NOT NULL,
  `type` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `eName`, `cName`, `cNo`, `uname`, `password`, `picture`, `type`) VALUES
(1, 'alamin', 'AIUB', 'AIUB', 'alamin', '456', '', 'user'),
(2, 'Rownak ahmed', 'AIUB', 'AIUB', 'rownak', '789', 'G:ATP 3lab perform/public/man1.jpg', 'admin'),
(3, 'koushik', 'AIUB', 'AIUB', 'mushi', '123', 'G:ATP 3lab perform/public/man1.jpg', 'admin'),
(4, 'Rahul dash Anik', 'AIUB', 'AIUB', 'anik', '147', 'G:ATP 3lab perform/public/man2.jpg', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `joblist`
--
ALTER TABLE `joblist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `joblist`
--
ALTER TABLE `joblist`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
