import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";
import { getEvenements, getIntervenants } from "../fakedb";
import Alert from "sweetalert2";

function PlanningTable() {
  const intervenants = getIntervenants();
  const evenements = getEvenements();
  const inters = [];
  intervenants.forEach((intervenant, index) => {
    inters.push(intervenant.nom);
  });

  const addIntervention = (e) => {
    const calendarApi = e.view.calendar;

    Alert.fire({
      title: "Titre de l'intervention",
      input: "text",
    }).then((result1) => {
      Alert.fire({
        title: "Nouvelle intervention",
        input: "textarea",
        inputLabel: "Observations",
      }).then((result2) => {
        Alert.fire({
          title: "Choisir l'intervenantn",
          input: "select",
          inputOptions: { inters },
        }).then((result3) => {
          calendarApi.addEvent({
            title: result1.value,
            comments: result2.value,
            start: e.start,
            end: e.end,
            intervenant: result3.value,
            color: intervenants[result3.value].idColor,
          });

          //console.log(e);
        });
      });
    });
  };

  const removeIntervention = (e) => {
    console.log(e.event._def);
    Alert.fire({
      title: e.event._def.title,
      text: e.event._def.extendedProps.comments,
      showDenyButton: true,
      confirmButtonText: "Supprimer",
      denyButtonText: `OK`,
    }).then((result1) => {
      if (result1.isConfirmed) {
        Alert.fire({
          title: "Vous êtes sûr de vouloir supprimer cette intervention ?",
          showDenyButton: true,
          confirmButtonText: "Supprimer",
          denyButtonText: `Annuler`,
        }).then((result2) => {
          if (result2.isConfirmed) {
            e.event.remove();
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Planning</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale={frLocale}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        selectable={true}
        editable={true}
        weekends={true}
        select={addIntervention}
        eventClick={removeIntervention}
        events={evenements}
      />
    </div>
  );
}

export default PlanningTable;
