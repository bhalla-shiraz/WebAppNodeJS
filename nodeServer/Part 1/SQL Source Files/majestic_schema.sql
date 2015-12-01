CREATE TABLE MAJESTIC(
  GlobalRank        INTEGER,
  TldRank           INTEGER,
  Domain            VARCHAR(80),
  TLD	              VARCHAR(20),
  RefSubNets        INTEGER,
  RefIPs            INTEGER,
  IDN_Domain        VARCHAR(80),
  IDN_TLD           VARCHAR(20),
  PrevGlobalRank    INTEGER,
  PrevTldRank       INTEGER,
  PrevRefSubNets    INTEGER,
  PrevRefIPs        INTEGER,
  
  PRIMARY KEY (GlobalRank)
  );
  
CREATE TABLE MAJESTIC_INDEX1(
  GlobalRank        INTEGER,
  TldRank           INTEGER,
  Domain            VARCHAR(80),
  TLD	              VARCHAR(20),
  RefSubNets        INTEGER,
  RefIPs            INTEGER,
  IDN_Domain        VARCHAR(80),
  IDN_TLD           VARCHAR(20),
  PrevGlobalRank    INTEGER,
  PrevTldRank       INTEGER,
  PrevRefSubNets    INTEGER,
  PrevRefIPs        INTEGER,
  
  PRIMARY KEY (GlobalRank)
  );

CREATE TABLE MAJESTIC_INDEX2(
  GlobalRank        INTEGER,
  TldRank           INTEGER,
  Domain            VARCHAR(80),
  TLD	              VARCHAR(20),
  RefSubNets        INTEGER,
  RefIPs            INTEGER,
  IDN_Domain        VARCHAR(80),
  IDN_TLD           VARCHAR(20),
  PrevGlobalRank    INTEGER,
  PrevTldRank       INTEGER,
  PrevRefSubNets    INTEGER,
  PrevRefIPs        INTEGER,
  
  PRIMARY KEY (GlobalRank)
  );
CREATE TABLE MAJESTIC_INDEX3(
  GlobalRank        INTEGER,
  TldRank           INTEGER,
  Domain            VARCHAR(80),
  TLD	              VARCHAR(20),
  RefSubNets        INTEGER,
  RefIPs            INTEGER,
  IDN_Domain        VARCHAR(80),
  IDN_TLD           VARCHAR(20),
  PrevGlobalRank    INTEGER,
  PrevTldRank       INTEGER,
  PrevRefSubNets    INTEGER,
  PrevRefIPs        INTEGER,
  
  PRIMARY KEY (GlobalRank)
  );

CREATE INDEX Index_TLD
ON MAJESTIC_INDEX1 ( TLD );

CREATE INDEX Index_RefSubNet
ON MAJESTIC_INDEX2 ( RefSubNets );

CREATE INDEX Index_TLD_RefSubNet
ON MAJESTIC_INDEX3 ( TLD, RefSubNets );