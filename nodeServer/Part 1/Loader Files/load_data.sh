echo "maj">timestamper
date +"%T">>timestamper
/opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr $1/$2 control = maj.clt
date +"%T">>timestamper

echo "maj1">>timestamper
date +"%T">>timestamper
/opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr $1/$2 control = maj1.clt
date +"%T">>timestamper

echo "maj2">>timestamper
date +"%T">>timestamper
/opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr $1/$2 control = maj2.clt
date +"%T">>timestamper

echo "maj3">>timestamper
date +"%T">>timestamper
/opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr $1/$2 control = maj3.clt
date +"%T">>timestamper
