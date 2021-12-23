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
  `c_name` enum('ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','back') NOT NULL,
  `c_value` int(11) NOT NULL,
  `c_suit` enum('spades','clubs','hearts','diamonds','back') NOT NULL,
  `c_url` varchar(150) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 MAX_ROWS=52;

/*Data for the table `cards_for_moutzouris` */

insert  into `cards_for_moutzouris`(`c_id`,`c_name`,`c_value`,`c_suit`,`c_url`) values 
(1,'ace',1,'clubs','https://upload.wikimedia.org/wikipedia/commons/3/36/Playing_card_club_A.svg\''),
(2,'two',2,'clubs','https://upload.wikimedia.org/wikipedia/commons/f/f5/Playing_card_club_2.svg\''),
(3,'three',3,'clubs','https://upload.wikimedia.org/wikipedia/commons/6/6b/Playing_card_club_3.svg\'\r\n'),
(4,'four',4,'clubs','https://upload.wikimedia.org/wikipedia/commons/3/3d/Playing_card_club_4.svg\''),
(5,'five',5,'clubs','https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_club_5.svg\''),
(6,'six',6,'clubs','https://upload.wikimedia.org/wikipedia/commons/a/a0/Playing_card_club_6.svg\''),
(7,'seven',7,'clubs','https://upload.wikimedia.org/wikipedia/commons/4/4b/Playing_card_club_7.svg\''),
(8,'eight',8,'clubs','https://upload.wikimedia.org/wikipedia/commons/e/eb/Playing_card_club_8.svg\''),
(9,'nine',9,'clubs','https://upload.wikimedia.org/wikipedia/commons/2/27/Playing_card_club_9.svg\''),
(10,'ten',10,'clubs','https://upload.wikimedia.org/wikipedia/commons/3/3e/Playing_card_club_10.svg\''),
(14,'ace',1,'diamonds','https://upload.wikimedia.org/wikipedia/commons/d/d3/Playing_card_diamond_A.svg\''),
(15,'two',2,'diamonds','https://upload.wikimedia.org/wikipedia/commons/5/59/Playing_card_diamond_2.svg\''),
(16,'three',3,'diamonds','https://upload.wikimedia.org/wikipedia/commons/8/82/Playing_card_diamond_3.svg\''),
(17,'four',4,'diamonds','https://upload.wikimedia.org/wikipedia/commons/2/20/Playing_card_diamond_4.svg\''),
(18,'five',5,'diamonds','https://upload.wikimedia.org/wikipedia/commons/f/fd/Playing_card_diamond_5.svg\''),
(19,'six',6,'diamonds','https://upload.wikimedia.org/wikipedia/commons/8/80/Playing_card_diamond_6.svg\''),
(20,'seven',7,'diamonds','https://upload.wikimedia.org/wikipedia/commons/e/e6/Playing_card_diamond_7.svg\''),
(21,'eight',8,'diamonds','https://upload.wikimedia.org/wikipedia/commons/7/78/Playing_card_diamond_8.svg\''),
(22,'nine',9,'diamonds','https://upload.wikimedia.org/wikipedia/commons/9/9e/Playing_card_diamond_9.svg\''),
(23,'ten',10,'diamonds','https://upload.wikimedia.org/wikipedia/commons/3/34/Playing_card_diamond_10.svg\''),
(27,'ace',1,'hearts','https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg\''),
(28,'two',2,'hearts','https://upload.wikimedia.org/wikipedia/commons/d/d5/Playing_card_heart_2.svg\''),
(29,'three',3,'hearts','https://upload.wikimedia.org/wikipedia/commons/b/b6/Playing_card_heart_3.svg\''),
(30,'four',4,'hearts','https://upload.wikimedia.org/wikipedia/commons/a/a2/Playing_card_heart_4.svg\''),
(31,'five',5,'hearts','https://upload.wikimedia.org/wikipedia/commons/5/52/Playing_card_heart_5.svg\''),
(32,'six',6,'hearts','https://upload.wikimedia.org/wikipedia/commons/c/cd/Playing_card_heart_6.svg\''),
(33,'seven',7,'hearts','https://upload.wikimedia.org/wikipedia/commons/9/94/Playing_card_heart_7.svg\''),
(34,'eight',8,'hearts','https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_heart_8.svg\''),
(35,'nine',9,'hearts','https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_heart_9.svg\''),
(36,'ten',10,'hearts','https://upload.wikimedia.org/wikipedia/commons/9/98/Playing_card_heart_10.svg\''),
(40,'ace',1,'spades','https://upload.wikimedia.org/wikipedia/commons/2/25/Playing_card_spade_A.svg\''),
(41,'two',2,'spades','https://upload.wikimedia.org/wikipedia/commons/f/f2/Playing_card_spade_2.svg\''),
(42,'three',3,'spades','https://upload.wikimedia.org/wikipedia/commons/5/52/Playing_card_spade_3.svg\''),
(43,'four',4,'spades','https://upload.wikimedia.org/wikipedia/commons/2/2c/Playing_card_spade_4.svg\''),
(44,'five',5,'spades','https://upload.wikimedia.org/wikipedia/commons/9/94/Playing_card_spade_5.svg\''),
(45,'six',6,'spades','https://upload.wikimedia.org/wikipedia/commons/d/d2/Playing_card_spade_6.svg\''),
(46,'seven',7,'spades','https://upload.wikimedia.org/wikipedia/commons/6/66/Playing_card_spade_7.svg\''),
(47,'eight',8,'spades','https://upload.wikimedia.org/wikipedia/commons/2/21/Playing_card_spade_8.svg\''),
(48,'nine',9,'spades','https://upload.wikimedia.org/wikipedia/commons/e/e0/Playing_card_spade_9.svg\''),
(49,'ten',10,'spades','https://upload.wikimedia.org/wikipedia/commons/8/87/Playing_card_spade_10.svg\''),
(52,'king',13,'spades','https://upload.wikimedia.org/wikipedia/commons/9/9'),
(53,'back',14,'back','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Card_back_01.svg/703px-Card_back_01.svg.png');

/*Table structure for table `deck1` */

DROP TABLE IF EXISTS `deck1`;

CREATE TABLE `deck1` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` enum('ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','back') DEFAULT NULL,
  `c_value` int(11) DEFAULT NULL,
  `c_suit` enum('spades','clubs','hearts','diamonds','back') DEFAULT NULL,
  `c_url` varchar(150) DEFAULT NULL,
  `p_id` enum('p1') NOT NULL DEFAULT 'p1',
  PRIMARY KEY (`p_id`),
  KEY `c_id` (`c_id`),
  CONSTRAINT `deck1_ibfk_2` FOREIGN KEY (`c_id`) REFERENCES `cards_for_moutzouris` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 MAX_ROWS=52;

/*Data for the table `deck1` */

/*Table structure for table `deck2` */

DROP TABLE IF EXISTS `deck2`;

CREATE TABLE `deck2` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` enum('ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','back') DEFAULT NULL,
  `c_value` int(11) DEFAULT NULL,
  `c_suit` enum('spades','clubs','hearts','diamonds','back') DEFAULT NULL,
  `c_url` varchar(150) DEFAULT NULL,
  `p_id` enum('p2') NOT NULL DEFAULT 'p2',
  PRIMARY KEY (`p_id`),
  KEY `c_id` (`c_id`),
  CONSTRAINT `deck2_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `cards_for_moutzouris` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 MAX_ROWS=52;

/*Data for the table `deck2` */

/*Table structure for table `game_status` */

DROP TABLE IF EXISTS `game_status`;

CREATE TABLE `game_status` (
  `status` enum('not active','initialized','started','ended','aborded') NOT NULL DEFAULT 'not active',
  `p_turn` enum('p1','p2') DEFAULT NULL,
  `result` enum('p1','p2','draw') DEFAULT NULL,
  `last_change` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `game_status` */

/*Table structure for table `players` */

DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `p_id` enum('p1','p2') NOT NULL,
  `p_username` varchar(20) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `p_last_action` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `players` */

/* Trigger structure for table `game_status` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `game_status_update` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `game_status_update` BEFORE UPDATE ON `game_status` FOR EACH ROW BEGIN
SET NEW.last_change = NOW();
END */$$


DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
