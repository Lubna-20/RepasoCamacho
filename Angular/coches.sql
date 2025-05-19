-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-05-2025 a las 22:46:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `augustobriga`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coches`
--

CREATE TABLE `coches` (
  `color` varchar(1024) DEFAULT NULL,
  `marca` varchar(1024) DEFAULT NULL,
  `modelo` varchar(1024) DEFAULT NULL,
  `consumo` double DEFAULT NULL,
  `precio` bigint(20) DEFAULT NULL,
  `kms` bigint(20) DEFAULT NULL,
  `tipoMotor` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `coches`
--

INSERT INTO `coches` (`color`, `marca`, `modelo`, `consumo`, `precio`, `kms`, `tipoMotor`) VALUES
('Green', 'Volkswagen', 'Modelo-382', 6.2, 33710, 10909, 'Gasolina'),
('Gray', 'Tesla', 'Modelo-196', 5.8, 34935, 63776, 'Gasolina'),
('Gray', 'Chevrolet', 'Modelo-884', 4.4, 30634, 34674, 'Gasolina'),
('White', 'BMW', 'Modelo-640', 5, 21943, 75025, 'Diesel'),
('White', 'Chevrolet', 'Modelo-138', 6, 46595, 100029, 'Gasolina'),
('Blue', 'Volkswagen', 'Modelo-611', 4.5, 28941, 100652, 'Híbrido'),
('Yellow', 'Tesla', 'Modelo-645', 4.4, 15511, 102523, 'Híbrido'),
('Blue', 'BMW', 'Modelo-200', 9.1, 46144, 31589, 'Híbrido'),
('Gray', 'Toyota', 'Modelo-926', 9.6, 48272, 78229, 'Diesel'),
('Green', 'Toyota', 'Modelo-214', 6.6, 20383, 55187, 'Gasolina'),
('Gray', 'Mazda', 'Modelo-346', 4.1, 38515, 12790, 'Híbrido'),
('Gray', 'Mazda', 'Modelo-444', 6.4, 18955, 51749, 'Eléctrico'),
('Blue', 'Ford', 'Modelo-976', 9.3, 41391, 89254, 'Diesel'),
('Yellow', 'Toyota', 'Modelo-530', 5.1, 38780, 102588, 'Híbrido'),
('Blue', 'Audi', 'Modelo-530', 7.3, 31859, 35942, 'Gasolina'),
('Yellow', 'Mazda', 'Modelo-526', 8.5, 46067, 47738, 'Híbrido'),
('Gray', 'Mazda', 'Modelo-696', 6.1, 30883, 54421, 'Eléctrico'),
('Blue', 'BMW', 'Modelo-569', 9.2, 17144, 36532, 'Gasolina'),
('White', 'Chevrolet', 'Modelo-696', 5, 21731, 47869, 'Gasolina'),
('Silver', 'Hyundai', 'Modelo-212', 7.5, 37763, 31446, 'Diesel'),
('Blue', 'Honda', 'Modelo-186', 5.1, 41572, 65354, 'Diesel'),
('Silver', 'Chevrolet', 'Modelo-520', 6.5, 37285, 107011, 'Híbrido'),
('Gray', 'Nissan', 'Modelo-204', 9.8, 41266, 9928, 'Diesel'),
('Black', 'Ford', 'Modelo-960', 7.7, 17192, 45318, 'Diesel'),
('Gray', 'Ford', 'Modelo-872', 8.3, 43424, 5307, 'Híbrido'),
('Silver', 'BMW', 'Modelo-626', 5.5, 25643, 48571, 'Híbrido'),
('Black', 'Mazda', 'Modelo-518', 3.6, 31699, 35545, 'Híbrido'),
('Silver', 'Mercedes-Benz', 'Modelo-879', 6.9, 23848, 118719, 'Eléctrico'),
('Yellow', 'Audi', 'Modelo-268', 6.9, 20512, 14425, 'Híbrido'),
('White', 'Hyundai', 'Modelo-149', 4.1, 16903, 10316, 'Híbrido'),
('Blue', 'Chevrolet', 'Modelo-312', 7.5, 38021, 54194, 'Híbrido'),
('Green', 'Kia', 'Modelo-339', 9.1, 19427, 83773, 'Diesel'),
('Blue', 'Volkswagen', 'Modelo-111', 4.1, 35093, 49933, 'Diesel'),
('White', 'Tesla', 'Modelo-117', 7.8, 28211, 50825, 'Híbrido'),
('Green', 'Mazda', 'Modelo-251', 5.2, 21316, 82484, 'Diesel'),
('White', 'Hyundai', 'Modelo-671', 6.8, 49571, 74262, 'Híbrido'),
('Green', 'Mazda', 'Modelo-800', 8.2, 39961, 25103, 'Gasolina'),
('Silver', 'Volkswagen', 'Modelo-950', 4.7, 19506, 30451, 'Gasolina'),
('Silver', 'Audi', 'Modelo-657', 3.9, 30193, 30326, 'Híbrido'),
('Black', 'Hyundai', 'Modelo-431', 8.5, 43796, 56538, 'Eléctrico'),
('Yellow', 'Kia', 'Modelo-770', 9.4, 24793, 51435, 'Eléctrico'),
('Black', 'Honda', 'Modelo-624', 10, 27389, 56701, 'Eléctrico'),
('Blue', 'Chevrolet', 'Modelo-831', 6.9, 47093, 9125, 'Eléctrico'),
('White', 'BMW', 'Modelo-215', 4.9, 37127, 68847, 'Eléctrico'),
('Black', 'Honda', 'Modelo-373', 4.5, 18567, 118983, 'Gasolina'),
('Silver', 'Mercedes-Benz', 'Modelo-601', 8.5, 17605, 73432, 'Híbrido'),
('Green', 'Kia', 'Modelo-812', 8.7, 33166, 30948, 'Eléctrico'),
('Green', 'Hyundai', 'Modelo-149', 8.5, 17073, 13193, 'Gasolina'),
('Green', 'Audi', 'Modelo-376', 9.5, 20865, 40863, 'Híbrido'),
('Gray', 'Kia', 'Modelo-127', 8.2, 26252, 67720, 'Híbrido'),
('White', 'Mazda', 'Modelo-842', 8, 44436, 92857, 'Diesel'),
('Black', 'Honda', 'Modelo-244', 8.6, 16400, 59335, 'Híbrido'),
('Black', 'Audi', 'Modelo-614', 8.7, 47832, 85658, 'Híbrido'),
('Gray', 'Volkswagen', 'Modelo-615', 8, 29672, 60920, 'Gasolina'),
('White', 'Toyota', 'Modelo-419', 3.7, 49084, 99978, 'Gasolina'),
('Green', 'Hyundai', 'Modelo-540', 4.8, 30318, 60426, 'Diesel'),
('Silver', 'Volkswagen', 'Modelo-734', 8.3, 25194, 34370, 'Híbrido'),
('Red', 'Tesla', 'Modelo-354', 5.1, 45126, 70491, 'Híbrido'),
('White', 'Mazda', 'Modelo-418', 6, 27428, 27694, 'Gasolina'),
('Red', 'BMW', 'Modelo-857', 5.3, 44632, 95256, 'Híbrido'),
('Gray', 'Mercedes-Benz', 'Modelo-323', 4.2, 16111, 96045, 'Híbrido'),
('White', 'Hyundai', 'Modelo-764', 3.7, 35369, 11160, 'Diesel'),
('Silver', 'Hyundai', 'Modelo-725', 7.1, 34749, 101474, 'Gasolina'),
('Blue', 'Hyundai', 'Modelo-314', 9.3, 45244, 78243, 'Gasolina'),
('Gray', 'Mazda', 'Modelo-525', 6.3, 27645, 11786, 'Diesel'),
('Red', 'Mercedes-Benz', 'Modelo-936', 5.6, 36920, 87260, 'Híbrido'),
('Green', 'Hyundai', 'Modelo-132', 5.6, 19867, 64796, 'Gasolina'),
('Gray', 'Mercedes-Benz', 'Modelo-110', 3.8, 21607, 85123, 'Diesel'),
('Gray', 'Nissan', 'Modelo-608', 4, 40779, 77020, 'Híbrido'),
('Gray', 'Ford', 'Modelo-559', 5, 16054, 115418, 'Híbrido'),
('White', 'Hyundai', 'Modelo-905', 8.4, 47914, 73358, 'Eléctrico'),
('Green', 'Honda', 'Modelo-205', 4, 20976, 15332, 'Híbrido'),
('Yellow', 'Kia', 'Modelo-636', 7.3, 46662, 30409, 'Gasolina'),
('Gray', 'BMW', 'Modelo-479', 8.5, 19033, 70196, 'Diesel'),
('Silver', 'Tesla', 'Modelo-250', 9, 37731, 45072, 'Eléctrico'),
('Green', 'Audi', 'Modelo-449', 5.4, 33905, 64043, 'Eléctrico'),
('Yellow', 'Tesla', 'Modelo-345', 4, 26189, 48609, 'Diesel'),
('Black', 'Mercedes-Benz', 'Modelo-114', 9.3, 31550, 110789, 'Gasolina'),
('Black', 'Volkswagen', 'Modelo-598', 8.8, 19321, 73196, 'Diesel'),
('Red', 'Hyundai', 'Modelo-348', 3.8, 41737, 28513, 'Gasolina'),
('Black', 'Honda', 'Modelo-574', 9.8, 40825, 33290, 'Híbrido'),
('Blue', 'Honda', 'Modelo-858', 7.3, 19404, 87252, 'Eléctrico'),
('Red', 'Honda', 'Modelo-548', 8.1, 22301, 19126, 'Híbrido'),
('Yellow', 'Nissan', 'Modelo-195', 8.8, 27069, 105656, 'Gasolina'),
('Silver', 'Ford', 'Modelo-523', 6.2, 29790, 24428, 'Eléctrico'),
('Silver', 'Mazda', 'Modelo-806', 9.9, 29853, 103335, 'Diesel'),
('Red', 'Hyundai', 'Modelo-747', 9.1, 46973, 20713, 'Híbrido'),
('Gray', 'Toyota', 'Modelo-739', 9.8, 21141, 26774, 'Híbrido'),
('Black', 'Volkswagen', 'Modelo-577', 9.3, 16934, 91044, 'Híbrido'),
('Silver', 'BMW', 'Modelo-715', 4.2, 28845, 56894, 'Diesel'),
('Green', 'Mazda', 'Modelo-782', 6.8, 29450, 8444, 'Híbrido'),
('Green', 'Audi', 'Modelo-815', 4.8, 18004, 66115, 'Gasolina'),
('White', 'Tesla', 'Modelo-770', 7.8, 23585, 92774, 'Diesel'),
('Yellow', 'Ford', 'Modelo-804', 5.9, 17684, 28880, 'Diesel'),
('Green', 'Hyundai', 'Modelo-197', 4.1, 41070, 105611, 'Eléctrico'),
('Gray', 'Audi', 'Modelo-780', 3.8, 16247, 51382, 'Diesel'),
('Red', 'Hyundai', 'Modelo-390', 7.4, 48604, 59056, 'Híbrido'),
('White', 'Hyundai', 'Modelo-763', 4.5, 28117, 114544, 'Diesel'),
('Red', 'Chevrolet', 'Modelo-667', 9.7, 40616, 90989, 'Eléctrico'),
('White', 'Nissan', 'Modelo-535', 4.6, 15841, 21860, 'Gasolina');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
