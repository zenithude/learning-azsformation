DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE utilisateur (

id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,

nom VARCHAR(100),

prenom VARCHAR(100),

email VARCHAR(255) NOT NULL UNIQUE

);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'Malet', 'David', 'azsformation@dsm-it.fr'),(2,'dupont','marie','marie@hotmail.fr'),(3,'miller','vincent','vm@yahoo.com'),(4,'zuckerberg','marc','marc@gmail.com'),(5,'paul','pierre','pp@orange.fr'),(6,'de vauclerc','lisa','lisadv@gmail.com'),(7,'gluntig','éléonore','glunt@sfr.com'),(8,'cavill','henry','henry@outlook.fr'),(9,'hopper','lionel','hpp@gmail.com'),(10,'tember','fabienne','fabienne@yopmail.com'),(11,'Doe', 'John', 'john@yahoo.fr'),(12,'Smith', 'Jane', 'jane@hotmail.com'),(13,'Dupont', 'Sebastien', 'sebastien@orange.fr'),(14,'Martin', 'Emilie', 'emilie@gmail.com');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;