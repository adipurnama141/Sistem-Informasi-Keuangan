-- --------------------------------------------------------
-- Host:                         localhost
-- Versi server:                 10.1.21-MariaDB - mariadb.org binary distribution
-- OS Server:                    Win32
-- HeidiSQL Versi:               9.2.0.4947
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for asrama
CREATE DATABASE IF NOT EXISTS `asrama` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `asrama`;


-- Dumping structure for table asrama.buku
CREATE TABLE IF NOT EXISTS `buku` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Judul` text NOT NULL,
  `Genre` text NOT NULL,
  `Penulis` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table asrama.buku: ~4 rows (approximately)
DELETE FROM `buku`;
/*!40000 ALTER TABLE `buku` DISABLE KEYS */;
INSERT INTO `buku` (`ID`, `Judul`, `Genre`, `Penulis`) VALUES
	(1, 'PC Interfacing and Data Acquisition', 'Fisika', 'Kevin James'),
	(2, 'Industrial Electronics and Robotics', 'Robotika', 'Schuler'),
	(3, 'Mechanics Third Edition', 'Fisika', 'Keith R. Symon'),
	(4, 'PC Based Instrumentation and Control', 'Fisika', 'Mike Tooley'),
	(5, 'Akuntansi Biaya', 'Akuntansi', '');
/*!40000 ALTER TABLE `buku` ENABLE KEYS */;


-- Dumping structure for table asrama.pembayaran
CREATE TABLE IF NOT EXISTS `pembayaran` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NIM` varchar(50) NOT NULL DEFAULT '0',
  `Bank` varchar(50) DEFAULT '0',
  `Nominal` int(11) NOT NULL DEFAULT '0',
  `Tanggal` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;

-- Dumping data for table asrama.pembayaran: ~48 rows (approximately)
DELETE FROM `pembayaran`;
/*!40000 ALTER TABLE `pembayaran` DISABLE KEYS */;
INSERT INTO `pembayaran` (`ID`, `NIM`, `Bank`, `Nominal`, `Tanggal`) VALUES
	(1, '13514006', 'Mandiri', 250, '18 April, 2017'),
	(2, '13517009', 'BNI', 250, '28 Februari, 2017'),
	(3, '13514006', 'BNI', 250, '3 April, 2017'),
	(4, '13514006', 'BNI', 250, '8 Januari, 2018'),
	(9, '13514006', 'Mandiri', 250, '10 April, 2017'),
	(10, '13514006', 'BNI', 250, '18 Februari, 2017'),
	(11, '13514009', 'Mandiri', 250, '18 Juli, 2002'),
	(12, '13514010', 'Penampungan', 250, '18 Juli, 2017'),
	(13, '16016063', 'Mandiri', 250, '18 Juli, 2017'),
	(14, '13514020', 'Mandiri', 250, '18 Juli, 2017'),
	(19, '13514020', 'Mandiri', 250, '17 Agustus, 2017'),
	(20, '13514006', 'Penampungan', 250, '10 April, 2017'),
	(21, '13514006', 'Mandiri', 250, '17 April, 2017'),
	(22, '13514006', 'Penampungan', 250, '17 April, 2017'),
	(23, '13514006', 'Mandiri', 250, '17 April, 2018'),
	(24, '13514006', 'Mandiri', 250, '28 Juli, 2017'),
	(25, '13514006', 'Mandiri', 250, '8 Juli, 2017'),
	(26, '13514006', 'Mandiri', 250, '17 Juli, 2017'),
	(27, '13514020', 'Penampungan', 500, '10 April, 2017'),
	(28, '13514006', 'Penampungan', 250, '20 Januari, 2017'),
	(29, '13514020', 'Penampungan', 200, '25 April, 2017'),
	(30, '13514020', 'Penampungan', 500, '10 April, 2017'),
	(31, '13514006', 'Mandiri', 500, '28 Agustus, 2010'),
	(32, '13514006', 'Mandiri', 250, '9 April, 2017'),
	(33, '13514006', 'Mandiri', 250, '12 April, 2017'),
	(34, '13514006', 'Mandiri', 25, '25 April, 2017'),
	(35, '13514006', 'Penampungan', 2500, '24 April, 2017'),
	(36, '13514006', 'Penampungan', 2500, '24 April, 2017'),
	(37, '13514006', 'Penampungan', 250, '29 April, 2017'),
	(38, '13514006', 'Mandiri', 250, '25 April, 2017'),
	(39, '13514006', 'Penampungan', 250, '18 Agustus, 2017'),
	(40, '13514006', 'Penampungan', 250, '17 Juli, 2017'),
	(41, '13514006', 'Mandiri', 500, '18 Juli, 2018'),
	(42, '13514006', 'Mandiri', 500, '17 Juli, 2018'),
	(43, '13514020', 'Mandiri', 250, '27 April, 2017'),
	(44, '13514006', 'Mandiri', 250, '18 Agustus, 2018'),
	(45, '13514006', 'Mandiri', 250, '12 April, 2017'),
	(46, '13514020', 'Mandiri', 250, '18 Agustus, 2017'),
	(47, '13514006', 'Mandiri', 250, '18 Agustus, 2018'),
	(48, '13514006', 'BNI', 250, '17 Juli, 2017'),
	(49, '13514020', 'BNI', 250, '17 Juli, 2017'),
	(50, '13514006', 'Penampungan', 250, '18 Agustus, 2018'),
	(51, '13514006', 'Mandiri', 250, '18 Agustus, 2018'),
	(52, '13514006', 'Mandiri', 250, '18 Agustus, 2018'),
	(53, '13514006', 'Mandiri', 250, '29 September, 2019'),
	(54, '13514006', 'Mandiri', 250, '18 Agustus, 2018'),
	(55, '13514006', 'Mandiri', 250, '29 September, 2018'),
	(56, '13514006', 'Mandiri', 250, '12 Februari, 2018'),
	(57, '13514006', 'Mandiri', 259, '1 Januari, 2001'),
	(58, '13514006', 'Mandiri', 20, '18 Agustus, 2008'),
	(59, '13514006', 'Penampungan', 500, '18 Agustus, 2018'),
	(60, '13514006', 'Mandiri', 250, '8 Agustus, 2018'),
	(61, '13514006', 'Penampungan', 250, '8 Agustus, 2018'),
	(62, '13514006', 'Mandiri', 250, '8 Juli, 2017'),
	(63, '13514006', 'Mandiri', 800, '17 Februari, 2017'),
	(64, '13514006', 'Mandiri', 250, '31 Agustus, 1981'),
	(65, '13514006', 'Mandiri', 13514006, '26 Juni, 2016'),
	(66, '13514006', 'Penampungan', 250, '18 September, 2019'),
	(67, '13514006', 'Mandiri', 250, '8 Agustus, 2017'),
	(68, '13514006', 'Mandiri', 250, '28 Agustus, 2001'),
	(69, '13514006', 'Mandiri', 250, '8 Agustus, 2018'),
	(70, '13514006', 'Mandiri', 25, '18 Agustus, 2017');
/*!40000 ALTER TABLE `pembayaran` ENABLE KEYS */;


-- Dumping structure for table asrama.penghuni
CREATE TABLE IF NOT EXISTS `penghuni` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NIM` text,
  `RFID` text,
  `Nama` text,
  `Asrama` text,
  `Kamar` text,
  `NamaTutor` text,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=635 DEFAULT CHARSET=latin1;

-- Dumping data for table asrama.penghuni: 594 rows
DELETE FROM `penghuni`;
/*!40000 ALTER TABLE `penghuni` DISABLE KEYS */;
INSERT INTO `penghuni` (`ID`, `NIM`, `RFID`, `Nama`, `Asrama`, `Kamar`, `NamaTutor`) VALUES
	(1, '16616428', '', 'Yesaya Elabi', 'SA', 'A01', 'Tegar Satria')
	
/*!40000 ALTER TABLE `penghuni` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
