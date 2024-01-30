CREATE TABLE public.customer (
	id int4 NOT NULL,
	name varchar(100) NULL,
	email varchar(100) NULL,
	cgc varchar(100) NULL,
	gender varchar(100) NULL,
	phone varchar(100) NULL,
	status int4 NULL DEFAULT 0,
	msg varchar(1000) NULL,
	createdat timestamp NULL DEFAULT now(),
	CONSTRAINT pk_customer PRIMARY KEY (id)
);

CREATE TABLE public.customer_address (
	customer_id int4 NOT NULL,
	zipcode varchar(10) NULL,
	street varchar(100) NULL,
	"number" varchar(20) NULL,
	detail varchar(100) NULL,
	district varchar(100) NULL,
	city varchar(100) NULL,
	state varchar(10) NULL,
	city_ibge_id varchar(20) NULL,
	status int4 NULL DEFAULT 0,
	msg varchar(1000) NULL,
	createdat timestamp NULL DEFAULT now(),
	CONSTRAINT pk_customer_address PRIMARY KEY (customer_id),
	CONSTRAINT customer_address_fk FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE public.orders (
	id int4 NOT NULL,
	total numeric(15,4) NULL,
	discount numeric(15,4) NULL,
	order_status varchar(20) NULL,
	payment_status varchar(20) NULL,
	fulfillment_status varchar(20) NULL,
	customer_id int4 NULL,
	status int4 NULL DEFAULT 0,
	msg varchar(1000) NULL,
	createdat timestamp NULL DEFAULT now(),
	code varchar(20) NULL,
	CONSTRAINT pk_orders PRIMARY KEY (id),
	CONSTRAINT orders_fk FOREIGN KEY (customer_id) REFERENCES customer(id)
);


CREATE TABLE public.items (
	id int4 NOT NULL,
	id_item int4 NOT NULL,
	variation_id int4 NULL,
	external_id varchar(100) NULL,
	"name" varchar(100) NULL,
	reference varchar(100) NULL,
	variation varchar(100) NULL,
	discount numeric(15,2) NULL,
	price numeric(15,2) NULL,
	sku varchar(100) NULL,
	quantity int4 NULL,
	total numeric(15,2) NULL,
	is_gift bool NULL,
	is_cover int4 NULL,
	createdat timestamp NULL DEFAULT now(),
	CONSTRAINT pk_items PRIMARY KEY (id, id_item),
	CONSTRAINT items_fk FOREIGN KEY (id) REFERENCES orders(id)
);


	--1 - Todos os clientes do estado de MG quetenham comprado o produto que contenhaem seu nome “Sapatilha em Couro Vazada”--



SELECT *
FROM customer c
JOIN orders o ON c.id = o.customer_id
JOIN items i ON o.id = i.id
JOIN customer_address ca ON c.id = ca.customer_id
WHERE ca.state = 'MG'
  AND i."name" ilike '%Sapatilha em Couro Vazado%'
	
 --- Todos os nomes e telefones dos clientes doestado de SP que efetuaram compras cuja
--faixa de valor esteja acima de R$8.000
  

  SELECT c.name, c.phone
FROM customer c
JOIN orders o ON c.id = o.customer_id
join customer_address ca on c.id = ca.customer_id 
WHERE o.total > 8000 
 and  ca.state = 'SP'
 
 