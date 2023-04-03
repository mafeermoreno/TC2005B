-- 1. La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
SELECT SUM(e.cantidad) AS SumaCantidades,SUM(
e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100)) AS ImporteTotal
FROM materiales m, entregan e
WHERE e.clave = m.clave
AND e.fecha BETWEEN '1997-01-01' AND '1997-12-31';

-- 2. Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
SELECT pr.razonsocial, SUM(e.cantidad) AS NumEntregas,SUM(e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100)) AS ImporteTotal  
FROM proveedores pr, entregan e, materiales m
WHERE pr.rfc=e.rfc AND e.clave=m.clave
GROUP BY pr.razonsocial;

-- 3. Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT m.clave, m.descripcion, SUM(e.cantidad) AS CantidadTotalEntregada, MIN(e.cantidad) AS MinimaCantidad, MAX(e.cantidad) AS MaximaCantidad, SUM(e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100)) AS ImporteTotal  
FROM materiales m, entregan e
WHERE m.clave=e.clave 
GROUP BY m.clave
HAVING AVG(e.cantidad) > 400;

--  4. Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT p.razonsocial, avg(e.cantidad) as PromCantEntr, m.clave, m.descripcion
FROM proveedores p, materiales m, entregan e
WHERE p.rfc=e.rfc AND e.clave=m.clave 
GROUP BY p.rfc, m.clave
HAVING AVG(e.cantidad) >= 500;

-- 5. Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.
SELECT p.razonsocial, avg(e.cantidad) as PromCantEntr, m.clave, m.descripcion
FROM proveedores p, entregan e, materiales m
WHERE m.clave=e.clave AND p.rfc=e.rfc
GROUP BY p.rfc, m.clave
HAVING AVG(e.cantidad) < 370 OR AVG(e.cantidad) > 450;

--  Utilizando la sentencia "INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan); Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.
INSERT INTO materiales (clave, descripcion, precio, impuesto, PorcentajeImpuesto) VALUES
(2001, 'Criptonita', 2333, 23, 1.9),
(2002, 'Chocolate', 33, 12, 1.2),
(2003, 'Hielo', 428, 22, 3.2),
(2004, 'Brillo', 3495, 234, 23.3),
(2005, 'Piel de cocodrilo', 3535, 234.2, 43.3);

-- 6. Clave y descripción de los materiales que nunca han sido entregados.
SELECT m.clave, m.descripcion
FROM materiales m
WHERE clave NOT IN(SELECT clave
                    FROM entregan);

-- 7. Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
SELECT p.razonsocial
FROM proveedores p
WHERE rfc IN (SELECT p.rfc
                     FROM (proveedores p
                     INNER JOIN entregan e ON e.rfc = p.rfc)
                     INNER JOIN proyectos pr ON pr.numero = e.numero
                     WHERE pr.denominacion= 'Vamos Mexico')
AND rfc IN   (SELECT p.rfc
                     FROM (proveedores p
                     INNER JOIN entregan e ON e.rfc = p.rfc)
                     INNER JOIN proyectos pr ON pr.numero = e.numero
                     WHERE pr.denominacion='Querétaro Limpio');

-- 8. Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
SELECT m.descripcion
FROM materiales m
WHERE clave NOT IN  (
                    SELECT m.clave
                    FROM materiales m, entregan e, proyectos pr
                    WHERE m.clave=e.clave AND pr.numero=e.numero
                    AND pr.denominacion = 'CIT Yucatan'
                    )
GROUP BY descripcion ASC;

-- 9. Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
SELECT p.razonsocial, AVG(e.cantidad) AS PromCantEntr
FROM proveedores p, entregan e
WHERE p.rfc=e.rfc
GROUP BY p.razonsocial ASC
HAVING AVG(e.cantidad) >    (
                            SELECT AVG(e.cantidad)
                            FROM proveedores p, entregan e
                            WHERE p.rfc=e.rfc
                            AND p.rfc='VAGO780901'
                            )

-- 10. RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT p.rfc, p.razonsocial
FROM proveedores p, entregan e, proyectos pr
WHERE p.rfc=e.rfc AND e.numero=pr.numero
AND pr.denominacion= 'Infonavit Durango'
AND (
    SELECT SUM(e.cantidad)
    FROM entregan e
    INNER JOIN proveedores pr ON pr.RFC = e.RFC
    WHERE e.fecha BETWEEN '2000-01-01' AND '2000-12-31'
    AND pr.rfc = p.rfc
    )
    >
    (
    SELECT SUM(e.cantidad)
    FROM entregan e
    INNER JOIN proveedores pr ON pr.rfc = e.rfc
    WHERE e.fecha BETWEEN '2001-01-01' AND '2001-12-31'
    AND pr.rfc = p.rfc
    );

