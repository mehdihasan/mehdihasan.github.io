<?php

include("banglaipsum.php");

@$value = intval($_POST["quantity"]);
@$type = $_POST["typ"];

if (isset($value, $type) && is_int($value) && $value > 0) {
	@$a = new Bangla_Ipsum();
	if ($type == "p") {
		$res = $a->set_paragraph($value);
	} else if ($type == "l") {
		$res = $a->set_list($value);
	} else if ($type == "w") {
		$res = $a->generate_sentence($value);
	}
	echo $res;
} else {
	if (!isset($value)) {
		echo "Please insert a numeric value in input box.";
	}
	if (!isset($type)) {
		echo "Please choose a type.";
	}
	if (!is_int($value)) {
		echo "Please insert a numeric value.";
	}
	if ($value <= 0) {
		echo "Please inseart a value greater than 0.";
	}
}

?>