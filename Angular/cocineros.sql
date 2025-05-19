-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 06, 2025 at 06:49 AM
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
-- Table structure for table `cocineros`
--

CREATE TABLE `cocineros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `descripcion` varchar(200) CHARACTER SET armscii8 COLLATE armscii8_bin NOT NULL,
  `funcion` varchar(100) CHARACTER SET armscii8 COLLATE armscii8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cocineros`
--

INSERT INTO `cocineros` (`id`, `nombre`, `imagen`, `descripcion`, `funcion`) VALUES
(1, 'JoseAndres', '/img/andres.jpg', 'El chef Josռ Andrռs ha sido nominado al premio Nobel de la Paz por su compromiso con los afectados por los desastres naturales y estո muy implicado en misiones humanitarias.  ', 'cocinero humanitario'),
(2, 'Arguinano', '/img/karlos.jpg', 'Ha escrito varios libros orientados a la cocina fոcil. Su empresa, Bainet, es responsable tanto de su programa de televisiցn como de sus libros de cocina. Publica tambiռn libros de Arzak, Eva Arguiրan', 'cocinero televisivo'),
(3, 'Arzak', '/img/arzak.jpg', 'Estո donde estո porque aprendiց de su madre una cosa: a amar la cocina; aunque si por ella hubiese sido, este donostiarra no serվa hoy el cocinero que revolucionց la cocina vasca', 'cocinero muy vasco'),
(4, 'Adria', '/img/adria.jpg', 'Se le considera un artista de la cocina, en la que ha introducido nuevas t?cnicas, como la deconstrucci?n descontextualizando ?ste concepto del mundo del arte (consistente en aislar los diversos ingre', 'comida muy rara con humos y espumas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cocineros`
--
ALTER TABLE `cocineros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cocineros`
--
ALTER TABLE `cocineros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
