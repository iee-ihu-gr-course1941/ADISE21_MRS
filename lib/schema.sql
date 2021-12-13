/*
SQLyog Community v13.1.8 (64 bit)
MySQL - 10.4.21-MariaDB : Database - adise21_mrs
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`adise21_mrs` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `adise21_mrs`;

/*Table structure for table `cards` */

DROP TABLE IF EXISTS `cards`;

CREATE TABLE `cards` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` enum('ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king') NOT NULL,
  `c_value` int(11) NOT NULL,
  `c_suit` enum('spades','clubs','hearts','diamonds') NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 MAX_ROWS=52;

/*Data for the table `cards` */

insert  into `cards`(`c_id`,`c_name`,`c_value`,`c_suit`) values 
(1,'ace',1,'clubs'),
(2,'two',2,'clubs'),
(3,'three',3,'clubs'),
(4,'four',4,'clubs'),
(5,'five',5,'clubs'),
(6,'six',6,'clubs'),
(7,'seven',7,'clubs'),
(8,'eight',8,'clubs'),
(9,'nine',9,'clubs'),
(10,'ten',10,'clubs'),
(11,'jack',11,'clubs'),
(12,'queen',12,'clubs'),
(13,'king',13,'clubs'),
(14,'ace',1,'diamonds'),
(15,'two',2,'diamonds'),
(16,'three',3,'diamonds'),
(17,'four',4,'diamonds'),
(18,'five',5,'diamonds'),
(19,'six',6,'diamonds'),
(20,'seven',7,'diamonds'),
(21,'eight',8,'diamonds'),
(22,'nine',9,'diamonds'),
(23,'ten',10,'diamonds'),
(24,'jack',11,'diamonds'),
(25,'queen',12,'diamonds'),
(26,'king',13,'diamonds'),
(27,'ace',1,'hearts'),
(28,'two',2,'hearts'),
(29,'three',3,'hearts'),
(30,'four',4,'hearts'),
(31,'five',5,'hearts'),
(32,'six',6,'hearts'),
(33,'seven',7,'hearts'),
(34,'eight',8,'hearts'),
(35,'nine',9,'hearts'),
(36,'ten',10,'hearts'),
(37,'jack',11,'hearts'),
(38,'queen',12,'hearts'),
(39,'king',13,'hearts'),
(40,'ace',1,'spades'),
(41,'two',2,'spades'),
(42,'three',3,'spades'),
(43,'four',4,'spades'),
(44,'five',5,'spades'),
(45,'six',6,'spades'),
(46,'seven',7,'spades'),
(47,'eight',8,'spades'),
(48,'nine',9,'spades'),
(49,'ten',10,'spades'),
(50,'jack',11,'spades'),
(51,'queen',12,'spades'),
(52,'king',13,'spades');

/*Table structure for table `cards_for_moutzouris` */

DROP TABLE IF EXISTS `cards_for_moutzouris`;

CREATE TABLE `cards_for_moutzouris` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` enum('ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king') NOT NULL,
  `c_value` int(11) NOT NULL,
  `c_suit` enum('spades','clubs','hearts','diamonds') NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 MAX_ROWS=52;

/*Data for the table `cards_for_moutzouris` */

insert  into `cards_for_moutzouris`(`c_id`,`c_name`,`c_value`,`c_suit`) values 
(1,'ace',1,'clubs'),
(2,'two',2,'clubs'),
(3,'three',3,'clubs'),
(4,'four',4,'clubs'),
(5,'five',5,'clubs'),
(6,'six',6,'clubs'),
(7,'seven',7,'clubs'),
(8,'eight',8,'clubs'),
(9,'nine',9,'clubs'),
(10,'ten',10,'clubs'),
(14,'ace',1,'diamonds'),
(15,'two',2,'diamonds'),
(16,'three',3,'diamonds'),
(17,'four',4,'diamonds'),
(18,'five',5,'diamonds'),
(19,'six',6,'diamonds'),
(20,'seven',7,'diamonds'),
(21,'eight',8,'diamonds'),
(22,'nine',9,'diamonds'),
(23,'ten',10,'diamonds'),
(27,'ace',1,'hearts'),
(28,'two',2,'hearts'),
(29,'three',3,'hearts'),
(30,'four',4,'hearts'),
(31,'five',5,'hearts'),
(32,'six',6,'hearts'),
(33,'seven',7,'hearts'),
(34,'eight',8,'hearts'),
(35,'nine',9,'hearts'),
(36,'ten',10,'hearts'),
(40,'ace',1,'spades'),
(41,'two',2,'spades'),
(42,'three',3,'spades'),
(43,'four',4,'spades'),
(44,'five',5,'spades'),
(45,'six',6,'spades'),
(46,'seven',7,'spades'),
(47,'eight',8,'spades'),
(48,'nine',9,'spades'),
(49,'ten',10,'spades'),
(52,'king',13,'spades');

/*Table structure for table `deck1` */

DROP TABLE IF EXISTS `deck1`;

CREATE TABLE `deck1` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name1` enum('ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king') DEFAULT NULL,
  `c_value1` int(11) DEFAULT NULL,
  `c_suit1` enum('spades','clubs','hearts','diamonds') DEFAULT NULL,
  `p_id1` int(20) NOT NULL DEFAULT 1,
  PRIMARY KEY (`p_id1`),
  KEY `c_id` (`c_id`),
  CONSTRAINT `deck1_ibfk_2` FOREIGN KEY (`c_id`) REFERENCES `cards_for_moutzouris` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 MAX_ROWS=52;

/*Data for the table `deck1` */

/*Table structure for table `deck2` */

DROP TABLE IF EXISTS `deck2`;

CREATE TABLE `deck2` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name2` enum('ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king') DEFAULT NULL,
  `c_value2` int(11) DEFAULT NULL,
  `c_suit2` enum('spades','clubs','hearts','diamonds') DEFAULT NULL,
  `p_id2` int(20) NOT NULL DEFAULT 2,
  PRIMARY KEY (`p_id2`),
  KEY `c_id` (`c_id`),
  CONSTRAINT `deck2_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `cards_for_moutzouris` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 MAX_ROWS=52;

/*Data for the table `deck2` */

/*Table structure for table `game_status` */

DROP TABLE IF EXISTS `game_status`;

CREATE TABLE `game_status` (
  `status` enum('not active','initialized','started','ended','aborded') NOT NULL DEFAULT 'not active',
  `p_turn` enum('player 1','player 2') DEFAULT NULL,
  `last_change` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `game_status` */

/*Table structure for table `player` */

DROP TABLE IF EXISTS `player`;

CREATE TABLE `player` (
  `p_id` int(11) NOT NULL,
  `p_username` varchar(20) DEFAULT NULL,
  `p_no_cardsInHand` int(21) DEFAULT NULL,
  `p_score` int(11) DEFAULT NULL,
  `p_turn` enum('yes','no') DEFAULT NULL,
  `p_token` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `player` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
