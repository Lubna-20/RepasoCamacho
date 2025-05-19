-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 05, 2025 at 10:22 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL,
  `imagen` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `direccion`, `cargo`, `edad`, `imagen`) VALUES
(24, 'Hamza Derouich', '3 Grand Canal Plaza, Grand Canal Street Upper, Dublin, D04 EE70, Ireland', 'CEO', 24, 'https://randomuser.me/api/portraits/men/39.jpg'),
(0, 'Alberto', '256, Olive Street, NY	', 'Gerenete', 24, 'https://randomuser.me/api/portraits/men/77.jpg'),
(7, 'Luismi Alcalde', 'San Pedro, 4', 'concejal', 22, 'https://randomuser.me/api/portraits/men/53.jpg'),
(5, 'Conor Mcgregor', 'Sal Sipuedes, 3', 'Gerente', 35, 'https://randomuser.me/api/portraits/men/40.jpg'),
(294, 'Mark Boucher', 'San Pedro, 4', 'Analista', 22, 'https://randomuser.me/api/portraits/men/71.jpg'),
(46, 'Luismi Alcalde', '256, Olive Street, NY', 'Analista', 44, 'https://randomuser.me/api/portraits/men/42.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
