import React from "react";
import { css, jsx } from "@emotion/react";
import "./cicloLayout.css";
import { media } from "@atlaskit/primitives/responsive";
import { token } from "@atlaskit/tokens";
import Button from "@atlaskit/button";
import { Stack, Inline } from "@atlaskit/primitives";

import Avatar from "@atlaskit/avatar";

import Tag from "@atlaskit/tag";
import { Link } from "react-router-dom";

import Progress from "./progress3.tsx";
import Input from "../creacion/input.tsx";
import Grupo from "../creacion/grupo.tsx";
import { Label } from "@atlaskit/form";

import { TimePicker, DatePicker } from "@atlaskit/datetime-picker";

const cardStyles = css({
  backgroundColor: "red",
  padding: token("space.050", "4px"),
  borderColor: token("color.border.discovery", "blue"),
  borderStyle: "solid",
  borderWidth: token("border.width.0", "0px"),
  [media.above.xs]: {
    padding: token("space.100", "8px"),
  },
  [media.above.sm]: {
    padding: token("space.150", "12px"),
    borderWidth: token("border.width", "1px"),
  },
  [media.above.md]: {
    padding: token("space.200", "16px"),
    borderWidth: token("border.width.outline", "2px"),
  },
});

const cicloLayout3 = () => {
  const siguienteEtapa = () => {
    var estado = localStorage.getItem("estado");
    if (estado == null || estado == undefined) {
      estado = 1;
    } else if (estado < 3) {
      estado = Number(estado) + 1;
    }
    localStorage.removeItem("estado");
    localStorage.setItem("estado", estado);

    // Limpiar localStorage

    // Recargar la página
    window.location.reload();
  };
  return (
    <div className="main" css={cardStyles}>
      <div className="sticky">
        <Progress />
      </div>

      <div className="mg-10">
        <div className="row mt-50 w-50">
          <div className="row">
            <Inline>
              <h4 className="Indicador">Objetivo</h4>
              <Input titulo="Descripción de la reunión" />
            </Inline>
          </div>
          <div className="row mt">
            <Inline>
              <h4 className="Indicador">Lugar</h4>
              <Input titulo="Lugar de la reunión" />
            </Inline>
          </div>
        </div>

        <div className="divisor mt-50"></div>
        <div className="row w-50 pl-50 mt-50">
          <div>
            <Label htmlFor="datepicker-disabled-range">Fecha</Label>
            <DatePicker
              defaultValue="2020-12-15"
              minDate="2020-12-10"
              maxDate="2020-12-20"
              selectProps={{ inputId: "datepicker-disabled-range" }}
            />
          </div>

          <div>
            <Label htmlFor="timepicker-editable-time">Hora de inicio</Label>
            <TimePicker
              timeIsEditable
              selectProps={{
                inputId: "timepicker-editable-time",
              }}
            />
          </div>

          <div>
            <Label htmlFor="timepicker-editable-time">Hora de termino</Label>
            <TimePicker
              timeIsEditable
              selectProps={{
                inputId: "timepicker-editable-time",
              }}
            />
          </div>
        </div>

        <div className="divisor mt-50"></div>

        <div className="row mt-50">
          <div className="column col-50">
            <Inline>
              <h4 className="Indicador">Anfritión: </h4>
              <div className="mt-10">
                <Tag
                  appearance="rounded"
                  text="correo1@example.com"
                  elemBefore={
                    <Avatar borderColor="transparent" size="xsmall" />
                  }
                />
              </div>
            </Inline>
          </div>

          <div className="column col-50">
            <Inline>
              <h4 className="Indicador">Secretario: </h4>
              <div className="mt-10">
                <Tag
                  appearance="rounded"
                  text="correo1@example.com"
                  elemBefore={
                    <Avatar borderColor="transparent" size="xsmall" />
                  }
                />
              </div>
            </Inline>
          </div>
        </div>
        <div className="mt-50">
          <Inline>
            <h4 className="Indicador">Invitados: </h4>
            <div>
              <Button> Agregar</Button>
            </div>
          </Inline>
        </div>

        <div className="row">
          <div className="pl-50">
            <Grupo></Grupo>
          </div>
        </div>
        <div className="divisor mt-50"></div>
        <div className="mt-50">
          <Inline>
            <h4 className="Indicador">Compromisos: </h4>
          </Inline>
        </div>
        <div className="divisor mt-50"></div>
        <div className="mt-50">
          <Inline>
            <h4 className="Indicador">Desarrollo: </h4>
          </Inline>
        </div>

        <div className="divisor mt-50"></div>
        <div className="row mt-50  center pl-50">
          <Link to="/postreunion">
            {" "}
            <Button className="col-50" onClick={siguienteEtapa}>
              Siguiente Etapa
            </Button>
          </Link>
        </div>
        <div className="row mt-50 w-50"></div>
      </div>
    </div>
  );
};

export default cicloLayout3;
