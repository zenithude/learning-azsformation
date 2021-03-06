-- MariaDB dump 10.19  Distrib 10.5.15-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: test_finaux
-- ------------------------------------------------------
-- Server version	10.5.15-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aliment`
--

DROP TABLE IF EXISTS `aliment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aliment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `marque` varchar(100) DEFAULT NULL,
  `sucres` float DEFAULT NULL,
  `calories` float DEFAULT NULL,
  `graisses` float DEFAULT NULL,
  `proteines` float DEFAULT NULL,
  `vitamines_c` float DEFAULT NULL,
  `famille_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `famille_id` (`famille_id`),
  CONSTRAINT `aliment_ibfk_1` FOREIGN KEY (`famille_id`) REFERENCES `famille` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aliment`
--

LOCK TABLES `aliment` WRITE;
/*!40000 ALTER TABLE `aliment` DISABLE KEYS */;
INSERT INTO `aliment` VALUES (1,'pomme','sans marque',19.1,72,0.2,0.4,NULL,2),(2,'poire','sans marque',27.5,134,0.2,1.1,NULL,2),(3,'banane','chiquita',24,101,0.3,1.1,NULL,2),(4,'jambon','herta',0.2,34,0.8,6.6,NULL,3),(5,'compote','andros',11,51,0,0.5,NULL,2),(6,'steak haché','charal',0.8,68,4.8,4.8,NULL,3),(7,'saumon','guyader',0,206,12.3,22.1,NULL,4),(8,'haricots verts','bonduelle',5.8,25,0.1,1.5,NULL,1),(9,'riz','oncle benz',28.2,130,0.3,2.7,NULL,7),(10,'pâtes completes','barilla',64,353,2.7,14,NULL,7),(11,'blanc de dinde','père dodu',0.6,98,0.9,22,NULL,3),(12,'filet de poulet','le gaulois',0,121,1.8,26.2,NULL,3),(13,'muesli','bjorg',26.5,170,5,3.5,NULL,6),(14,'café','carte noire',0,0,0,0,NULL,9),(15,'jus d\'orange','innocent',16,74,0,1.6,NULL,5),(16,'jus de pomme','andros',24,100,0.2,0.2,NULL,2),(17,'pomme de terre','doréac',21.1,104,0.2,2.8,NULL,7),(18,'oeuf','naturalia',0.4,74,5.1,6.5,NULL,10),(19,'baguette','sans marque',36.1,185,1.2,7.5,NULL,8),(20,'lait d\'amande','bjorg',6.1,80,5.3,1.5,NULL,9);
/*!40000 ALTER TABLE `aliment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aliment_lieu`
--

DROP TABLE IF EXISTS `aliment_lieu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aliment_lieu` (
  `aliment_id` int(11) NOT NULL,
  `lieu_id` int(11) NOT NULL,
  PRIMARY KEY (`aliment_id`,`lieu_id`),
  KEY `lieu_id` (`lieu_id`),
  CONSTRAINT `aliment_lieu_ibfk_1` FOREIGN KEY (`aliment_id`) REFERENCES `aliment` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `aliment_lieu_ibfk_2` FOREIGN KEY (`lieu_id`) REFERENCES `lieu` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aliment_lieu`
--

LOCK TABLES `aliment_lieu` WRITE;
/*!40000 ALTER TABLE `aliment_lieu` DISABLE KEYS */;
INSERT INTO `aliment_lieu` VALUES (11,1);
/*!40000 ALTER TABLE `aliment_lieu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `famille`
--

DROP TABLE IF EXISTS `famille`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `famille` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `famille`
--

LOCK TABLES `famille` WRITE;
/*!40000 ALTER TABLE `famille` DISABLE KEYS */;
INSERT INTO `famille` VALUES (1,'legumes'),(2,'fruits'),(3,'viandes'),(4,'poissons'),(5,'jus de fruits'),(6,'céréales'),(7,'féculent'),(8,'pain'),(9,'boisson'),(10,'oeuf');
/*!40000 ALTER TABLE `famille` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `langue`
--

DROP TABLE IF EXISTS `langue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `langue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `langue`
--

LOCK TABLES `langue` WRITE;
/*!40000 ALTER TABLE `langue` DISABLE KEYS */;
INSERT INTO `langue` VALUES (1,'français'),(2,'anglais');
/*!40000 ALTER TABLE `langue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lieu`
--

DROP TABLE IF EXISTS `lieu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lieu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lieu`
--

LOCK TABLES `lieu` WRITE;
/*!40000 ALTER TABLE `lieu` DISABLE KEYS */;
INSERT INTO `lieu` VALUES (1,'Carrefour City','supermarché');
/*!40000 ALTER TABLE `lieu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `langue_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `langue_id` (`langue_id`),
  CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`langue_id`) REFERENCES `langue` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'durantay','quentin','qentin@gmail.com',1),(2,'dupont','marie','marie@hotmail.fr',1),(3,'miller','vincent','vm@yahoo.com',2),(4,'zuckerberg','marc','marc@gmail.com',2),(5,'paul','pierre','pp@orange.fr',1),(6,'de vauclerc','lisa','lisadv@gmail.com',1),(7,'gluntig','éléonore','glunt@sfr.com',1),(8,'cavill','henry','henry@outlook.fr',2),(9,'hopper','lionel','hpp@gmail.com',2),(10,'tember','fabienne','fabienne@yopmail.com',1);
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur_aliment`
--

DROP TABLE IF EXISTS `utilisateur_aliment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilisateur_aliment` (
  `utilisateur_id` int(11) NOT NULL,
  `aliment_id` int(11) NOT NULL,
  KEY `utilisateur_id` (`utilisateur_id`),
  KEY `aliment_id` (`aliment_id`),
  CONSTRAINT `utilisateur_aliment_ibfk_1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `utilisateur_aliment_ibfk_2` FOREIGN KEY (`aliment_id`) REFERENCES `aliment` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur_aliment`
--

LOCK TABLES `utilisateur_aliment` WRITE;
/*!40000 ALTER TABLE `utilisateur_aliment` DISABLE KEYS */;
INSERT INTO `utilisateur_aliment` VALUES (1,7),(1,3),(1,5),(2,2),(2,19),(2,14),(3,4),(3,15),(3,12),(1,17),(4,5),(4,4),(4,7),(5,1),(5,18),(5,3),(6,2),(6,12),(6,6),(7,16),(7,19),(7,1),(8,3),(8,5),(9,18),(9,9),(9,14),(10,16),(10,3);
/*!40000 ALTER TABLE `utilisateur_aliment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `utilisateurs_gmail_vw`
--

DROP TABLE IF EXISTS `utilisateurs_gmail_vw`;
/*!50001 DROP VIEW IF EXISTS `utilisateurs_gmail_vw`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `utilisateurs_gmail_vw` (
  `id` tinyint NOT NULL,
  `nom` tinyint NOT NULL,
  `prenom` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `langue_id` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `utilisateurs_gmail_vw`
--

/*!50001 DROP TABLE IF EXISTS `utilisateurs_gmail_vw`*/;
/*!50001 DROP VIEW IF EXISTS `utilisateurs_gmail_vw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `utilisateurs_gmail_vw` AS select 1 AS `id`,1 AS `nom`,1 AS `prenom`,1 AS `email`,1 AS `langue_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-29  8:27:59
